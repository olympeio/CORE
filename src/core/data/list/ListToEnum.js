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
import {FunctionBrick, registerBrick, ListDef, Transaction, Enum, EnumValue, onDestroy, Sync} from 'olympe';
import {getLogger} from 'logging';
import {combineLatestWith} from "rxjs/operators";

export default class ListToEnum extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} brickContext
     * @param {!ListDef | !Array} list
     * @param {!FunctionBrick} transformer
     * @param {!function(InstanceTag)} setEnum
     */
    onUpdate(brickContext, [list, transformer], [setEnum]) {
        // Guards
        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            getLogger('List To Enum').error('The provided list is neither an array nor a listdef');
            return;
        }

        const [itemInput, rankInput] = transformer.getInputs();
        const [valueOutput, nameOutput, rankOutput] = transformer.getOutputs();

        // 1. Create the enumeration itself
        const transaction = new Transaction().persist(false);
        const enumTag = Enum.create(transaction);
        transaction.execute(() => { /* empty */ });

        // Function that delete the specified instance
        const clear = (instance) => {
            const t = new Transaction();
            t.delete(instance);
            t.execute(() => { /* empty */ })
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
                t.execute(() => { /* empty */ });
            });
        }

        // Delete the enumeration when the brick is refreshed or destroyed
        brickContext.onClear(() => clear(enumTag));

        // 2. Loop over the list to create values
        // The list is a listdef, so the content can change live
        if (list instanceof ListDef) {
            list.forEach((item, id) => {
                const transformerCtx = brickContext.createChild('list item to enum value');
                transformerCtx.set(itemInput, item);
                list.observeRank(id).subscribe((rank) => transformerCtx.set(rankInput, rank));

                const previousValueTags = [];
                createEnumValue(previousValueTags, transformerCtx);

                onDestroy(() => {
                    const previousTag = previousValueTags.pop();
                    previousTag && clear(previousTag);
                });
                transformer.run(transformerCtx);
            });
        }

        // The list is a static array, so the content is static but values could change live
        else {
            list.forEach((item, itemRank) => {
                const transformerCtx = brickContext.createChild('list item to enum value');
                transformerCtx.set(itemInput, item);
                transformerCtx.set(rankInput, itemRank);

                const previousValueTags = [];
                createEnumValue(previousValueTags, transformerCtx);

                transformer.run(transformerCtx);
            });
        }

        setEnum(Sync.getInstance(enumTag));
    }
}

registerBrick('017cc6aff41ef19ebff3', ListToEnum);
