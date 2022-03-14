import {CloudObject} from "olympe";

export default class MockSync extends CloudObject {
    constructor(tag) {
        super(undefined, tag);

        this.props = new Map();
    }

    setProperty(prop, val) {
        this.props.set(prop, val);
    }

    get(prop) {
        return this.props.get(prop);
    }
}
