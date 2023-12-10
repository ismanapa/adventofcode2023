import { day10_1 } from "./day10_1";

describe("Day 10", () => {
  test("Works with test input 1", () => {
    const result = day10_1("test1");

    expect(result).toBe(4);
  });

  test("Works with test input 2", () => {
    const result = day10_1("test2");

    expect(result).toBe(8);
  });


  test("Show answer of puzzle 1", () => {
    const result = day10_1("input");

    console.log("result day 10 - part 1:", result);
  });
});
