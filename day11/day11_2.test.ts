import { day11_2 } from "./day11_2";

describe("Day 11", () => {
  test("Works with test input 2 and age factor of 1", () => {
    const result = day11_2("test1", 2);

    expect(result).toBe(374);
  });

  test("Works with test input 2 and age factor of 10", () => {
    const result = day11_2("test1", 10);

    expect(result).toBe(1030);
  });

  test("Works with test input 2 and age factor of 100", () => {
    const result = day11_2("test1", 100);

    expect(result).toBe(8410);
  });

  test("Show answer of puzzle 2", () => {
    const result = day11_2("input", 1000000);

    console.log("result day 11 - part 2:", result);
  });
});
