import { day06_1 } from "./day06_1";

describe("Day 05", () => {
  test("Works with test input 1", () => {
    const result = day06_1("test1");

    expect(result).toBe(288);
  });

  test("Show answer of puzzle 1", () => {
    const result = day06_1("input");

    console.log("result day 06 - part 1:", result);
  });
});
