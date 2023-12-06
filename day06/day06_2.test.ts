import { day06_2 } from "./day06_2";

describe("Day 05", () => {
  test("Works with test input 1", () => {
    const result = day06_2("test1");

    expect(result).toBe(71503);
  });

  test("Show answer of puzzle 1", () => {
    const result = day06_2("input");

    console.log("result day 06 - part 2:", result);
  });
});
