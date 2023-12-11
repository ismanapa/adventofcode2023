import { day11_1 } from "./day11_1";

describe("Day 11", () => {
  test("Works with test input 1", () => {
    const result = day11_1("test1");

    expect(result).toBe(374);
  });

  test("Show answer of puzzle 1", () => {
    const result = day11_1("input");

    console.log("result day 11 - part 1:", result);
  });
});
