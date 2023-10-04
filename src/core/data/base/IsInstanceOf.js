import {Brick, Color, DBView, registerBrick, CloudObject, tagToString, StringModel, BooleanModel, NumberModel, DatetimeModel, ColorModel} from 'olympe';

export default class IsInstanceOf extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} object
     * @param {!CloudObject} model
     * @param {function(boolean)} setResult
     * @param {!Array} outputs
     */
    update($, [object, model], [setResult]) {
        if (!(model instanceof CloudObject)) {
            throw new Error(`Provided type is not a CloudObject: ${model}`);
        }
        const modelTag = model.getTag();
        // Object can be a CloudObject or could be a tag if it is a string.
        if ((object instanceof CloudObject || (typeof object === 'string') && CloudObject.exists(object))) {
            const models = Query.from(object)
                .follow(CloudObject.modelRel)
                .followRecursively(CloudObject.extendsRel, true)
                .executeFromCache();
            setResult(models.has(model));
        }
        // Handle primitive types
        else if (modelTag === tagToString(StringModel)) {
            setResult(typeof object === 'string');
        } else if (modelTag === tagToString(BooleanModel)) {
            setResult(typeof object === 'boolean');
        } else if (modelTag === tagToString(NumberModel)) {
            setResult(typeof object === 'number');
        } else if (modelTag === tagToString(DatetimeModel)) {
            setResult(object instanceof Date);
        } else if (modelTag === tagToString(ColorModel)) {
            setResult(object instanceof Color);
        } else {
            setResult(false);
        }
    }
}

registerBrick('017efd85f4460e1294f5', IsInstanceOf);
