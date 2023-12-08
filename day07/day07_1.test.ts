import { day07_1 } from "./day07_1";

describe("Day 05", () => {
  test("Works with test input 1", () => {
    const result = day07_1("test1");

    expect(result).toBe(6440);
  });

  test("Show answer of puzzle 1", () => {
    const result = day07_1("input");

    console.log("result day 07 - part 1:", result);
  });
});
