import { day09_2 } from "./day09_2";

describe("Day 09", () => {
  test("Works with test input 1", () => {
    const result = day09_2("test1");

    expect(result).toBe(2);
  });

  test("Show answer of puzzle 2", () => {
    const result = day09_2("input");

    console.log("result day 09 - part 1:", result);
  });
});
