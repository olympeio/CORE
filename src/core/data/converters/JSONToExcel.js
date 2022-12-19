import { ActionBrick, registerBrick, ErrorFlow, Transaction, File as OFile, CloudObject } from 'olympe';
import * as XLSX from 'xlsx';
export default class JSONToExcel extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} jsonSource
     * @param {string} excelFileName
     * @param {function()} forwardEvent
     * @param {function(File)} setExcelFile
     * @param {function(*)} setErrorFlow
     */
    update($, [jsonSource, excelFileName], [forwardEvent, setExcelFile, setErrorFlow]) {

        if (jsonSource === null) {
            setErrorFlow(ErrorFlow.create("Input JSON is empty", 500));
            return;
        }   

        const excelFile = excelFileName + ".xlsx";
        const workbook = XLSX.utils.book_new();
        const transaction = new Transaction();
        let binary;

        try {
            const sheet = XLSX.utils.json_to_sheet(jsonSource);
            XLSX.utils.book_append_sheet(workbook, sheet, "Sheet1");
            binary = XLSX.writeXLSX(workbook, {type: "array"});
        } catch (error) {
            setErrorFlow(ErrorFlow.create("JSON couldn't be added to spreadsheet", 501));
            return;
        }

        const fileTag = OFile.createFromContent(
            transaction,
            excelFile,
            binary,
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );

        transaction.persistInstance(fileTag, false);
        transaction.execute()
            .then(() => {
                setExcelFile(CloudObject.get(fileTag));
                forwardEvent();
            })
            .catch(message => setErrorFlow(ErrorFlow.create(message, 1)));
    }
}

registerBrick('01851546bb2a899ff75f', JSONToExcel);
