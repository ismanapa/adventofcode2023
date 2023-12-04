import { day04_1 } from "./day04_1";

describe("Day 04", () => {
  test("Works with test input 1", () => {
    const result = day04_1("test1");

    expect(result).toBe(13);
  });

  test("Show answer of puzzle 1", () => {
    const result = day04_1("input");

    console.log("result day 04 - part 1:", result);
  });
});
