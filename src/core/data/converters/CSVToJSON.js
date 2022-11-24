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
     * @param {function(*)} setErrorFlow
     */
    async update($, [source], [setResult, setErrorFlow]) {
        const logger = getLogger('CSV To JSON');

        let worksheet;
        if (typeof source == 'string') {
            // read csv as excel
            worksheet = XLSX.read(source, {
                type: 'string',
                raw: true,
            });
        } else if (source instanceof OFile) {
            worksheet = await new Promise((resolve) => {
                source.getContentAsString((data) => {
                    const workbook = XLSX.read(data, {
                        type: 'string',
                        cellDates: true,
                    });
                    resolve(workbook);
                });
            });
        } else {
            logger.error('Provided source is not a string or a File');
            return;
        }

        const csv = worksheet.Sheets.Sheet1;
        const json = XLSX.utils.sheet_to_json(csv, {});

        if (json.length === 0) {
            setErrorFlow(ErrorFlow.create('Provided source is not a correct csv', 1));
        } else {
            setResult(json);
        }
    }
}

registerBrick('017f9d3654ceba10710f', CSVToJSON);
