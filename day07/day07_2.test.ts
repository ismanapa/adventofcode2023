import { day07_2 } from "./day07_2";

describe("Day 05", () => {
  test("Works with test input 1", () => {
    const result = day07_2("test1");

    expect(result).toBe(5905);
  });

  test("Show answer of puzzle 2", () => {
    const result = day07_2("input");

    console.log("result day 07 - part 2:", result);
  });
});
