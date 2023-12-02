import { day1 } from "./day01";

describe("Day 01", () => {
    test("Works with test input 1", () => {
        const result = day1("test1");
        
        expect(result).toBe(142);
    })

    test("Works with test input 2", () => {
        const result = day1("test2");
        
        expect(result).toBe(281);
    })

    test.only("Shows answer of input", () => {
        const result = day1("input");

        console.log("result day 01:", result);
    })

});