import { day05_1 } from "./day05_1";

describe("Day 05", () => {
  test("Works with test input 1", () => {
    const result = day05_1("test1");

    expect(result).toBe(35);
  });

  test("Show answer of puzzle 1", () => {
    const result = day05_1("input");

    console.log("result day 05 - part 1:", result);
  });
});
