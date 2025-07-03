import { ActionBrick, registerBrick, File as OFile } from 'olympe';
import {getFormData} from "helpers/httpRequest";
import {fromBase64} from "helpers/binaryConverters";

export default class AddToFormData extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} name
     * @param {*} value
     * @param {*} formData
     * @param {function()} forwardEvent
     * @param {function(*)} setFormData
     */
    update($, [name, value, formData], [forwardEvent, setFormData]) {
        let data = formData;
        if (!data) {
            data = getFormData();
        }

        if (value instanceof OFile) {
            value.getContentUrl(
                (content) => {
                    data.append(
                        name,
                        new Blob([fromBase64(content.substring(content.indexOf(';base64,')+8))], { type: value.get(File.mimeTypeProp) }),
                        value.get(File.fileNameProp)
                    );
                    setFormData(data);
                    forwardEvent();
                },
                (error) => {
                    $.throw(ErrorFlow.create(`An error occurred while getting the file content ${error.message}`, 500))
                });
        } else {
            data.append(name, value);
            setFormData(data);
            forwardEvent();
        }


    }
}

registerBrick('0190b59fa8be07d45d8a', AddToFormData);
