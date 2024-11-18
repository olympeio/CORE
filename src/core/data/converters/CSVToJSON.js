import { Brick, BrickContext, registerBrick, ErrorFlow, File as OFile } from 'olympe';
import { getLogger } from 'logging';
import * as XLSX from 'xlsx';

export default class CSVToJSON extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {function(*)} setResult
     */
    async update($, [source], [setResult]) {
        const logger = getLogger('CSV To JSON');
        
        try {
            let worksheet;
            if (typeof source == 'string') {
                // read csv as excel
                worksheet = XLSX.read(source, {
                    type: 'string',
                    raw: true,
                });
            } else if (source instanceof OFile) {
                const data = await source.getContentAsString(source);
                worksheet = XLSX.read(data, {
                    type: 'string',
                    cellDates: true,
                });
            } else {
                throw new Error('Provided source is not a string or a File');
            }

            const csv = worksheet.Sheets.Sheet1;
            const json = XLSX.utils.sheet_to_json(csv, {});

            if (json.length === 0) {
                throw new Error('Provided source is not a correct csv');
            } else {
                setResult(json);
            }
        } catch (error) {
            logger.error(error);
            throw ErrorFlow.create(error.message, 1);
        }
    }
}

registerBrick('017f9d3654ceba10710f', CSVToJSON);
