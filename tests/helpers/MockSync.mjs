import {Sync} from "olympe";

export default class MockSync extends Sync {
    constructor(tag) {
        super(undefined, tag);

        this.props = new Map();
    }

    setProperty(prop, val) {
        this.props.set(prop, val);
    }

    getProperty(prop) {
        return this.props.get(prop);
    }
}
