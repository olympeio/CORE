import { BrickContext } from 'olympe';
import StringSplit from "../../src/core/text/StringSplit.js";

describe('String Split', () => {
    it('should not execute if the separator is not string or limit is not number', () => {
        const func = new StringSplit();
        const context = new BrickContext();

        const valueOut = jasmine.createSpy();
        const exec1 = () => func.update(context, ['a,b,c,d,e', ',', 'test'], [valueOut]);
        expect(exec1).toThrowError();

        const exec2 = () => func.update(context, ['a,b,c,d,e', 2, 2], [valueOut]);
        expect(exec2).toThrowError();
    });
});
