import { Brick, BrickContext, registerBrick, Transaction, ErrorFlow, CloudObject, File as OFile } from 'olympe';
import { getLogger } from 'logging';
import * as XLSX from 'xlsx';
import { stringToBinary } from 'helpers/binaryConverters';
import {merge} from "rxjs";
import {map} from "rxjs/operators";

export default class ExcelToCSV extends Brick {

    /**
     * @override
     */
     setupExecution($) {
        const inputs = this.getInputs();
        return merge(...inputs.map((i) => $.observe(i)))
        .pipe(map((value) => {
            return $.get(inputs[0]) === null ? null : inputs.map((i) => $.get(i));
        }));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} source
     * @param {string} sheetName
     * @param {string} separator
     * @param {function(File)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, sheetName, separator], [setResult, setErrorFlow]) {
        const logger = getLogger('Excel to CSV');
        if (source instanceof OFile) {
            source.getContentAsBinary(
                (data) => this.convertToCSV($, source.get(OFile.nameProp), data, sheetName, separator, setResult, setErrorFlow, logger),
                (message) => {
                    logger.error('Error while reading content as binary: ' + message);
                    setErrorFlow(ErrorFlow.create('Error while reading content as binary: ' + message, 1));
                });
        } else {
            logger.error('Provided source is not a File');
            setErrorFlow(ErrorFlow.create('Provided source is not a File', 1));
        }
    }

    /**
     * @param {BrickContext} $
     * @param {string} fileName
     * @param {function(!ArrayBuffer)} data
     * @param {string} sheetName
     * @param {string} separator
     * @param {function(File)} setResult
     * @param {function(*)} setErrorFlow
     * @param {Logger} logger
     */
    convertToCSV($, fileName, data, sheetName, separator, setResult, setErrorFlow, logger) {
        try {
            const worksheet = XLSX.read(data, {
                type: 'buffer',
                cellDates: true,
            });
            sheetName = sheetName ?? worksheet.SheetNames[0];
            separator = separator ?? ",";
            const csv = XLSX.utils.sheet_to_csv(worksheet.Sheets[sheetName], { FS: separator });

            if (csv.length === 0) {
                logger.error('Provided source is empty or is not a correct Excel file');
                setErrorFlow(ErrorFlow.create('Provided source is empty or is not a correct Excel file', 1));
            } else {
                fileName = fileName.substring(0, fileName.lastIndexOf(".")) + ".csv";
                const transaction = Transaction.from($);
                const fileTag = OFile.createFromContent(transaction, fileName, stringToBinary(csv), 'text/csv');
                transaction.persistInstance(fileTag, false);
                Transaction.process($, transaction)
                    .then(() => {
                        setResult(CloudObject.get(fileTag));
                    })
                    .catch(message => {
                        logger.error(message)
                        setErrorFlow(ErrorFlow.create(message, 1));
                    });
            }
        } catch (error) {
            logger.error('Error while converting content to CSV: ' + error.message);
            setErrorFlow(ErrorFlow.create('Error while converting content to CSV: ' + error.message, 1));
        }
    }
}

registerBrick('018484fe35c7283a093e', ExcelToCSV);
