import { day02_2 } from "./day02_2";

describe("Day 02", () => {
    test("Works with test input 1", () => {
        const result = day02_2("test1");
        
        expect(result).toBe(2286);
    });

    test("Show answer of puzzle 2", () => {
        const result = day02_2("input");
        
        console.log("result day 02 - part 2:", result);
    });
});