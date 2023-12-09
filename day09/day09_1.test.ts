import { day09_1 } from "./day09_1";

describe("Day 09", () => {
  test("Works with test input 1", () => {
    const result = day09_1("test1");

    expect(result).toBe(114);
  });

  test("Show answer of puzzle 1", () => {
    const result = day09_1("input");

    console.log("result day 09 - part 1:", result);
  });
});
