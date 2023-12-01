import { day1 } from "./day01";

describe("Day 01", () => {
    test("Works with test input", () => {
        const result = day1("test");
        
        expect(result).toBe(142);
    })

    test("Shows answer of input1", () => {
        const result = day1("input");

        console.log("result day 01 - part 1:", result);
    })
});