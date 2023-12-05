import { day05_2 } from "./day05_2";

describe("Day 05", () => {
  test("Works with test input 1", () => {
    const result = day05_2("test1");

    expect(result).toBe(46);
  });

  test("Show answer of puzzle 2", () => {
    const result = day05_2("input");

    // 😅 676.353s
    console.log("result day 05 - part 2:", result);
  });
});
