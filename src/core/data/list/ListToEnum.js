/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Brick, registerBrick, ListDef, Transaction, Enum, EnumValue, onDestroy, CloudObject, QueryResult} from 'olympe';
import {getLogger} from 'logging';
import {combineLatestWith} from "rxjs/operators";

export default class ListToEnum extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!ListDef|!List} list
     * @param {!Brick} transformer
     * @param {!function(InstanceTag)} setEnum
     */
    onUpdate($, [list, transformer], [setEnum]) {
        // Guards
        if (!Array.isArray(list) && !(list instanceof ListDef) && !(list instanceof QueryResult)) {
            getLogger('List To Enum').error('The provided list must be of type ListDef, Array or QueryResult');
            return;
        }

        const [itemInput, rankInput] = transformer.getInputs();
        const [valueOutput, nameOutput, rankOutput] = transformer.getOutputs();

        // 1. Create the enumeration itself
        const transaction = new Transaction().persist(false);
        const enumTag = Enum.create(transaction);
        transaction.execute();

        // Function that delete the specified instance
        const clear = (instance) => {
            const t = new Transaction();
            t.delete(instance);
            t.execute();
        }

        // Creates an enum value based on the specified context
        const createEnumValue = (previous, ctx) => {
            ctx.observe(valueOutput).pipe(combineLatestWith(
                ctx.observe(nameOutput),
                ctx.observe(rankOutput)
            )).subscribe(([value, name, rank]) => {
                const t = new Transaction().persist(false);
                const previousTag = previous.pop();
                previousTag && t.delete(previousTag);
                previous.push(EnumValue.create(t, enumTag, value, name, rank));
                t.execute();
            });
        }

        // Delete the enumeration when the brick is refreshed or destroyed
        $.onClear(() => clear(enumTag));

        // 2. Loop over the list to create values
        // The list is a listdef, so the content can change live
        if (list instanceof ListDef) {
            list.forEach((item, id) => {
                const transformer$ = $.runner(transformer)
                    .set(itemInput, item);
                list.observeRank(id).subscribe(rank => transformer$.set(rankInput, rank));

                const previousValueTags = [];
                createEnumValue(previousValueTags, transformer$);

                onDestroy(() => {
                    const previousTag = previousValueTags.pop();
                    previousTag && clear(previousTag);
                });
            });
        }

        // The list is a static array or a QueryResult, so the content is static but values could change live
        else {
            list.forEach((item, itemRank) => {
                const transformer$ = $.runner(transformer)
                    .set(itemInput, item)
                    .set(rankInput, itemRank);

                const previousValueTags = [];
                createEnumValue(previousValueTags, transformer$);
            });
        }

        setEnum(CloudObject.get(enumTag));
    }
}

registerBrick('017cc6aff41ef19ebff3', ListToEnum);
