import { day02_1 } from "./day02_1";

describe("Day 02", () => {
    test("Works with test input 1", () => {
        const result = day02_1("test1", {
            red: 12,
            green: 13,
            blue: 14,
        });
        
        expect(result).toBe(8);
    });

    test("Show answer of puzzle 1", () => {
        const result = day02_1("input", {
            red: 12,
            green: 13,
            blue: 14,
        });
        
        console.log("result day 02 - part 1:", result);
    });

});