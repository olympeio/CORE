import { Brick, registerBrick } from 'olympe';

export default class GetEnumEntries extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} enumKey
     * @param {function()} forwardEvent
     * @param {function(ListDef)} setEntries
     * @param {function(ListDef)} setValues
     * @param {function(ListDef)} setDisplayNames
     */
    update($, [enumKey], [forwardEvent, setEntries, setValues, setDisplayNames]) {
        if (!enumKey || typeof enumKey.getValues !== 'function') {
            throw new Error('Invalid Enum input');
        }

        const enumObj = enumKey.getValues().map((v) => {
            const obj = v.toObject(true);
            return {
                value: obj['Value (String)'],
                name: obj.name,
                rank: obj.Rank
            };
        });
        const values = enumObj.map(entry => entry.value);
        const displayNames = enumObj.map(entry => entry.name);

        setEntries(enumObj);
        setValues(values);
        setDisplayNames(displayNames);
        forwardEvent();
    }
}

registerBrick('0198797c6c80f0fae18d', GetEnumEntries);
