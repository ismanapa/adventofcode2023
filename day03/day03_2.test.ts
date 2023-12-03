import { day03_2 } from "./day03_2";

describe("Day 03", () => {
  test("Works with test input 2", () => {
    const result = day03_2("test2");

    expect(result).toBe(467835);
  });

  test("Show answer of puzzle 1", () => {
    const result = day03_2("input");

    console.log("result day 03 - part 2:", result);
  });
});
