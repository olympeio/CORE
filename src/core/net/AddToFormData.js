import { Brick, registerBrick, File as OFile, ErrorFlow } from 'olympe';
import {getFormData} from "helpers/httpRequest";
import {fromBase64} from "helpers/binaryConverters";

export default class AddToFormData extends Brick {

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
    async update($, [formData, name, value], [forwardEvent, setFormData]) {
        let data = formData;
        if (!data) {
            data = getFormData();
        }

        if (value instanceof OFile) {
            try {
                const content = await value.getContentUrl();
                data.append(
                    name,
                    new Blob([fromBase64(content.substring(content.indexOf(';base64,')+8))], { type: value.get(File.mimeTypeProp) }),
                    value.get(OFile.fileNameProp)
                );
                setFormData(data);
                forwardEvent();
            } catch (e) {
                $.throw(ErrorFlow.create(`An error occurred while getting the file content ${e.message}`, 500))
            }
        } else {
            data.append(name, value);
            setFormData(data);
            forwardEvent();
        }


    }
}

registerBrick('0190b59fa8be07d45d8a', AddToFormData);
