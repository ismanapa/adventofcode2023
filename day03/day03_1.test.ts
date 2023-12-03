import { day03_1 } from "./day03_1";

describe("Day 03", () => {
  test("Works with test input 1", () => {
    const result = day03_1("test1");

    expect(result).toBe(4361);
  });

  test("Show answer of puzzle 1", () => {
    const result = day03_1("input");

    console.log("result day 03 - part 1:", result);
  });
});
