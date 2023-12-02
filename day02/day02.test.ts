import { day02 } from "./day02";

describe("Day 02", () => {
    test("Works with test input 1", () => {
        const result = day02("test1", {
            red: 12,
            green: 13,
            blue: 14,
        });
        
        expect(result).toBe(8);
    });

    test("Show answer of puzzle 1", () => {
        const result = day02("input", {
            red: 12,
            green: 13,
            blue: 14,
        });
        
        console.log("result day 02 - part 1:", result);
    });

});