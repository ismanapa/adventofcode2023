import { day10_2 } from "./day10_2";

describe("Day 10", () => {
  test("Works with test input 3", () => {
    const result = day10_2("test3");

    expect(result).toBe(4);
  });

  test("Works with test input 4", () => {
    const result = day10_2("test4");

    expect(result).toBe(8);
  });

  test("Works with test input 5", () => {
    const result = day10_2("test5");

    expect(result).toBe(10);
  });

  test("Show answer of puzzle 2", () => {
    const result = day10_2("input");

    console.log("result day 10 - part 2:", result);
  });
});
