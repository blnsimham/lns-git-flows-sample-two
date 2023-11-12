import { Calculation } from '../src/index';

describe("Index Output test", () => {
    test("GetName OutPut test", () => {
        const calc: Calculation = new Calculation();
        const names = calc.getName();
        expect(names).toEqual("Lakshmi Narasimham,Amruthavalli");
    });
});