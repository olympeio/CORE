import { Brick, BrickContext, registerBrick } from 'olympe';

export default class FormatNumber extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} n
     * @param {string} locales
     * @param {*} format
     * @param {string} customization
     * @param {function(string)} setFormattedNumber
     */
    update($: BrickContext, [n, locales, format, customization]: [number, string, string, string], [setFormattedNumber]: [(s: string) => void]) {
        let localesObject;
        if (locales === '') {
            localesObject = undefined;
        } else {
            try {
                // Try to parse an array
                localesObject = JSON.parse(locales);
            } catch(e) {
                localesObject = locales;
            }
        }
        let formatObject, customObject;
        try {
            formatObject = JSON.parse(format);
        } catch (e) {
            console.error('format', format, 'is not valid JSON');
        }
        
        if (customization === '') {
            customObject = {};
        } else {
            try {
                customObject = JSON.parse(customization);
            } catch (e) {
                console.error('customization', customization, 'is not valid JSON');
            }
        }
        // Merge customObject into formatObject
        Object.assign(formatObject, customObject);
        setFormattedNumber(Intl.NumberFormat(localesObject, formatObject).format(n));
    }
}

registerBrick('019155a24b3f332e6105', FormatNumber);
