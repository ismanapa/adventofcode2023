import { day04_2 } from "./day04_2";

describe("Day 04", () => {
  test("Works with test input 1", () => {
    const result = day04_2("test1");

    expect(result).toBe(30);
  });

  test("Show answer of puzzle 1", () => {
    const result = day04_2("input");

    console.log("result day 04 - part 2:", result);
  });
});
