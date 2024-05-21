import {
    BrickContext,
    ListDef,
    QueryResult,
    CloudObject,
    Transaction,
    File as OFile,
    StringModel,
    NumberModel,
    DatetimeModel,
    BooleanModel,
    RelationModel,
    PropertyModel,
    Query,
    Enum,
} from 'olympe';
import * as XLSX from 'xlsx';
import {XMLBuilder, XMLParser} from 'fast-xml-parser';
import {stringToBinary} from 'helpers/binaryConverters';

/**
 * Convert Cloud Object To JSON
 * @param {ListDef} source
 * @param {boolean} propertiesOnly
 * @return {Object}
 */

export const handleCloudObjectToJson = (source, propertiesOnly) => {
    const processItem = (item) => parseProperties(item, propertiesOnly);
    try {
        if (source instanceof ListDef || source instanceof Array || source instanceof QueryResult) {
            const processCollection = (collection) => collection.map((item) => processItem(item));
            return source instanceof ListDef ? processCollection(Array.from(source, processItem)) : processCollection(source);
        } else if (source instanceof CloudObject) {
            return processItem(source);
        } else {
            throw new Error('Provided source is not a Cloud Object or List of Cloud Objects');
        }
    } catch (error) {
        const errorMsg = `Error converting source to JSON. Provided source is not a correct Cloud Object or List of Cloud Objects: ${error.message}`;
        throw new Error(errorMsg);
    }
};

/**
 * Handle parse Cloud Object property
 * @param {string | CloudObject} instance
 * @param {boolean=} propertiesOnly
 * @return {Object}
 */
function parseProperties(instance, propertiesOnly = true) {
    if (CloudObject.exists(instance)) {
        return instance.toObject(propertiesOnly, true);
    } else {
        throw new Error(`Provided Cloud Object "${instance}" does not exist`);
    }
}

/**
 * Convert Excel File to CSV
 * @param {BrickContext} $
 * @param {File} file
 * @param {string} sheetName
 * @param {string} separator
 * @param {Object} range
 */

export const handleExcelToCSV = async ($, file, sheetName, separator, range) => {
    if (!(file instanceof OFile)) {
        throw new Error('Provided source is not a File');
    }
    try {
        const data = await getSourceContent(file);
        return convertToCSV($, file.get(OFile.fileNameProp), data, sheetName, separator, range);
    } catch (error) {
        throw new Error('Error while reading content as binary: ' + error.message);
    }
};

/**
 * Checks if the given cell reference is a valid Excel header or is empty (defaulting to 'A1').
 * @param {string} range
 * @param {boolean}
 */
export const isValidHeader = (range) => {
    if (!range) {
        return true; // Treat null or empty as default 'A1'
    }
    const splitted = range.split(':');
    const regex = /^[A-Za-z]+[0-9]+$/;
    return splitted.every((item) => regex.test(item));
};

/**
 * Updates the range of cells to start from a new cell or defaults to 'A1' if not specified.
 * @param {string} originalRange
 * @param {string} range
 * @returns {string} Updated range.
 */
export const updateRange = (originalRange, range) => {
    if (range) {
        const [startCell, endCell] = originalRange.split(':');
        const [rangeStart, rangeEnd] = range.split(':');
        const newStartCell = (rangeStart || startCell).toUpperCase();
        const newEndCell = (rangeEnd || endCell).toUpperCase();
        return `${newStartCell}:${newEndCell}`;
    }
    return originalRange;
};

/**
 * Converts binary Excel data to CSV and saves it as a file.
 * @param {BrickContext} $
 * @param {string} fileName
 * @param {function(!ArrayBuffer)} data
 * @param {string} sheetName
 * @param {string} separator
 * @param {Object=} range
 */
const convertToCSV = ($, fileName, data, sheetName, separator, range) => {
    const worksheet = XLSX.read(data, {type: 'buffer', cellDates: true});
    const finalSheetName = getFinalSheetName(worksheet, sheetName);
    separator = separator ?? ',';

    const sheet = worksheet.Sheets[finalSheetName];
    if (!sheet) {
        throw new Error(`Sheet "${finalSheetName}" not found`);
    }

    if (!isValidHeader(range)) {
        throw new Error(`Invalid start position: "${range}"`);
    }
    const originalRange = sheet['!ref'];
    sheet['!ref'] = updateRange(originalRange, range);

    const csv = XLSX.utils.sheet_to_csv(sheet, {FS: separator});

    if (csv.trim().length === 0) {
        const errorMsg = `Cannot read from sheet "${finalSheetName}" in range ${range}`;
        throw new Error(errorMsg);
    } else {
        const transaction = Transaction.from($);
        const fileTag = transaction.create(OFile);
        transaction.persist(fileTag, false);
        OFile.setContent(transaction, fileTag, fileName.substring(0, fileName.lastIndexOf('.')) + '.csv', stringToBinary(csv), 'text/csv');

        Transaction.process($, transaction).catch((message) => {
            throw new Error('The transaction failed.' + message);
        });

        return CloudObject.get(fileTag);
    }
};

/**
 * Convert JSON to Excel
 * @param {Array} jsonSource
 * @param {string} excelFileName
 * @return {File}
 */
export const handleJsonToExcel = (jsonSource, excelFileName) => {
    try {
        // Ensure the file name has the correct extension
        const excelFile = excelFileName.endsWith('.xlsx') ? excelFileName : excelFileName + '.xlsx';
        const workbook = XLSX.utils.book_new();

        // Check type of jsonSource
        const source = Array.isArray(jsonSource) ? jsonSource : [jsonSource];

        // Creating an Excel sheet from JSON
        const sheet = XLSX.utils.json_to_sheet(source);
        XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');

        // Writing workbook to a binary array
        const binary = XLSX.writeXLSX(workbook, {type: 'array'});

        // Preparing to save the Excel file
        const transaction = new Transaction();
        const fileTag = transaction.create(OFile);
        transaction.persist(fileTag, false);
        const mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

        // Setting the content of the file object and executing the transaction
        OFile.setContent(transaction, fileTag, excelFile, binary, mimeType);

        transaction.execute().catch((message) => {
            throw new Error(`The transaction failed: ${message}`);
        });

        return CloudObject.get(fileTag);
    } catch (error) {
        throw new Error(`JSON couldn't be added to spreadsheet: ${error.message}`);
    }
};

/**
 * Convert CSV file to JSON
 * @param {File} source
 * @return {string}
 */
export const handleCSVToJSON = async (source) => {
    try {
        const data = await getSourceData(source);
        const workbook = XLSX.read(data, {
            type: 'string',
            cellDates: source instanceof OFile,
            raw: !(source instanceof OFile),
        });

        const csv = workbook.Sheets.Sheet1;
        if (!csv) throw new Error('Sheet1 is missing in the workbook');

        const array = XLSX.utils.sheet_to_json(csv, {raw: true});

        if (array.length === 0) {
            throw new Error('No data found in CSV');
        }

        return array;
    } catch (error) {
        throw new Error(`Error converting CSV to JSON: ${error.message}`);
    }
};

/**
 * Read content from OFile
 * @param {string|File} source
 * @return {Promise<Array>}
 */
const getSourceData = (source) => {
    if (typeof source === 'string') {
        return Promise.resolve(source);
    } else if (source instanceof OFile) {
        return new Promise((resolve, reject) => {
            source.getContentAsString((data) => {
                if (data) {
                    resolve(data);
                } else {
                    reject(new Error('Failed to read content from OFile'));
                }
            });
        });
    } else {
        return Promise.reject(new Error('Provided source is not a string or a File'));
    }
};

/**
 * Convert JSON to Cloud Objects
 * @param {Object | string} source
 * @param {!CloudObject} businessModel
 * @param {boolean} persist
 * @return {Object}
 */
export const handleJsonToCloudObjects = (source, businessModel, persist) => {
    validateJsonToCloudObjectInputs(source, businessModel);

    let json;

    try {
        json = parseJson(source);
    } catch (e) {
        throw new Error(`Error while parsing the source string: ${e.message}`);
    }

    const transaction = new Transaction(persist);

    // Result is either an array of tags or a single tag depending on the JSON source.

    const result = Array.isArray(json) ? json.map((data) => parseInstance(transaction, businessModel, data)) : parseInstance(transaction, businessModel, json);

    transaction.execute().catch((message) => {
        throw new Error('Transaction failed: ' + message);
    });

    return Array.isArray(result) ? result.map(CloudObject.get) : CloudObject.get(result);
};

/**
 * Validates input parameters for a function that converts JSON to a CloudObject.
 * @param {Object | string} source
 * @param {!CloudObject} businessModel
 */
const validateJsonToCloudObjectInputs = (source, businessModel) => {
    if (source === null) {
        throw new Error('Provided source null');
    }
    if (typeof source !== 'object' && typeof source !== 'string') {
        throw new Error('Provided source is not an object or a string');
    }
    if (!(businessModel instanceof CloudObject)) {
        throw new Error('Provided model is not a Type');
    }
};

/**
 * Parse JSON
 * @param {Object | string} source
 * @return {Object}
 */
const parseJson = (source) => {
    return typeof source === 'string' ? JSON.parse(source) : source;
};

/**
 * Parse instance and create cloud object
 * @param {!Transaction} transaction
 * @param {!CloudObject} model
 * @param {!Object} data
 * @return {string}
 */
const parseInstance = (transaction, model, data) => {
    const properties = parseInstanceProperties(model, data);
    const instanceTag = transaction.create(model, properties);
    parseRelations(transaction, instanceTag, model, data);
    return instanceTag;
};

/**
 * Parse instance properties
 * @param {!CloudObject} model
 * @param {!Object} data
 * @return {!Map<Tag, *>}
 */
const parseInstanceProperties = (model, data) => {
    return Query.from(model)
        .followRecursively(CloudObject.extendRel, true)
        .executeFromCache()
        .filter((model) => !model.equals(CloudObject.asInstance()))
        .flatMap((model) => model.follow(CloudObject.propertyRel).executeFromCache().toArray())
        .reduce((map, property) => {
            const value = data[property.name()];
            if (value !== undefined && !(value instanceof Array) && !(value instanceof Object)) {
                map.set(property, formatValue(value, property));
            }
            return map;
        }, new Map());
};

/**
 * Format property value based on its type
 * @param {*} value
 * @param {!CloudObject} property
 * @return {*}
 */
const formatValue = (value, property) => {
    const propType = property.followSingle(PropertyModel.typeRel).executeFromCache();
    switch (true) {
        case propType === null || value === 'null':
            return null;
        case propType.equals(StringModel.asInstance()):
            return String(value);
        case propType.equals(NumberModel.asInstance()):
            return Number(value);
        case propType.equals(DatetimeModel.asInstance()):
            return value instanceof Date ? value : new Date(value);
        case propType.equals(BooleanModel.asInstance()):
            return !!value;
        case CloudObject.get(propType.getTag()).getModel().equals(Enum):
            return String(value);
        default:
            return null;
    }
};

/**
 * Parse relations and create destination cloud objects
 * @param {!Transaction} transaction
 * @param {string} instance
 * @param {!CloudObject} model
 * @param {!Object} data
 */
const parseRelations = (transaction, instance, model, data) => {
    const createDestinationObject = (relation, destinationObject) => {
        const destinationModel = relation.followSingle(RelationModel.destinationModelRel).executeFromCache();
        const relatedInstance = parseInstanceProperties(transaction, destinationModel, destinationObject);
        transaction.createRelation(relation, instance, relatedInstance);
    };

    const relations = Query.from(model)
        .followRecursively(CloudObject.extendRel, true)
        .executeFromCache()
        .filter((model) => !model.equals(CloudObject.asInstance()))
        .flatMap((model) => model.follow(RelationModel.originModelRel.getInverse()).executeFromCache().toArray());
    relations.forEach((relation) => {
        const destinationObject = data[relation.name()];
        if (Array.isArray(destinationObject)) {
            destinationObject.forEach(createDestinationObject.bind(this, relation));
        } else if (destinationObject instanceof Object) {
            createDestinationObject(relation, destinationObject);
        }
    });
};

/**
 * Convert Excel file to JSON
 * @param {File} source
 * @param {string} sheetName
 * @param {string} range
 * @returns {Object}
 */
export const handleExcelToJSON = async (source, sheetName, range) => {
    if (!(source instanceof OFile)) {
        throw new Error('Provided source is not a File');
    }

    try {
        const data = await getSourceContent(source);
        return convertExcelToJSON(data, sheetName, range);
    } catch (error) {
        throw new Error('Error while reading content as binary: ' + error.message);
    }
};

/**
 * Get the content of the source file.
 * @param {!OFile} source
 * @returns {Promise<ArrayBuffer>}
 */
const getSourceContent = (source) => {
    return new Promise((resolve, reject) => {
        source.getContentAsBinary(
            (data) => resolve(data),
            (message) => reject(new Error('Error while reading content as binary: ' + message))
        );
    });
};

/**
 * Convert Excel to JSON
 * @param {!ArrayBuffer} data
 * @param {string} sheetName
 * @param {string} range
 * @returns {Object}
 */
const convertExcelToJSON = (data, sheetName, range) => {
    const workbook = XLSX.read(data, {
        type: 'buffer',
        cellDates: true,
    });

    const finalSheetName = getFinalSheetName(workbook, sheetName);
    const sheet = workbook.Sheets[finalSheetName];

    if (!sheet) {
        throw new Error(`Sheet "${finalSheetName}" not found`);
    }

    if (!isValidHeader(range)) {
        throw new Error(`Invalid range: "${range}"`);
    }
    const originalRange = sheet['!ref'];
    sheet['!ref'] = updateRange(originalRange, range);

    const json = XLSX.utils.sheet_to_json(sheet, {});

    if (json.length === 0) {
        const errorMsg = `Cannot read from sheet "${finalSheetName}" in range ${range}`;
        throw new Error(errorMsg);
    }
    return json;
};

/**
 * Get the final sheet name to be used for conversion.
 * @param {Object} workbook
 * @param {string} sheetName
 * @returns {string}
 */
const getFinalSheetName = (workbook, sheetName) => {
    return typeof sheetName === 'string' && sheetName.trim() !== '' ? sheetName : workbook.SheetNames[0];
};

/**
 * Converts JSON input to a string with specified indentation.
 * @param {Object} source
 * @param {number} spaces
 * @return {string}
 */

export const handleJsonToString = (source, spaces) => {
    if (typeof source !== 'object' && typeof source !== 'string') {
        throw new Error('Provided source is neither an object nor a string');
    }

    if (typeof spaces !== 'number') {
        throw new Error('Provided spaces input is not a number');
    }

    // Attempt to parse 'source' if it's a string or use directly if it's an object.
    try {
        const json = typeof source === 'string' ? JSON.parse(source) : source;
        return JSON.stringify(json, undefined, spaces);
    } catch (error) {
        throw new Error('Error while processing JSON: ' + error.message);
    }
};

/**
 * Converts JSON input to XML format with a specified root tag.
 * @param {Object} source
 * @param {string} rootTag
 * @return {string}
 */

export const handleJsonToXML = (source, rootTag) => {
    if (typeof source !== 'object' && typeof source !== 'string') {
        throw new Error('Provided source is neither an object nor a string');
    }

    if (typeof rootTag !== 'string') {
        throw new Error('Provided rootTag input is not a string');
    }

    // Attempt to parse 'source' if it's a string or use directly if it's an object.
    let json;
    try {
        json = typeof source === 'string' ? JSON.parse(source) : source;
    } catch (error) {
        throw new Error('Error while processing JSON: ' + error.message);
    }

    // Check if 'json' is an object (not an array).
    if (!json || Array.isArray(json)) {
        const errorMsg = 'JSON input must be an object';
        throw new Error(errorMsg);
    }

    // Build XML with the specified root tag.
    try {
        const builder = new XMLBuilder();
        const wrappedJson = {[rootTag]: json};
        return builder.build(wrappedJson);
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * Converts XML input to JSON format.
 * @param {Object} source
 * @return {Object}
 */

export const handleXMLToJson = async (source) => {
    let xml;
    if (source instanceof OFile) {
        xml = await new Promise((resolve, reject) => {
            source.getContentAsString((data, error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    } else if (typeof source === 'string') {
        xml = source;
    } else {
        throw new Error('Provided source is not a string or a File');
    }

    const parser = new XMLParser();

    try {
        return parser.parse(xml);
    } catch (e) {
        throw new Error('Error while parsing the source: ' + e.message);
    }
};

