import { day08_1 } from "./day08_1";

describe("Day 08", () => {
  test("Works with test input 1", () => {
    const result = day08_1("test1");

    expect(result).toBe(2);
  });

  test("Works with test input 2", () => {
    const result = day08_1("test2");

    expect(result).toBe(6);
  });

  test("Show answer of puzzle 1", () => {
    const result = day08_1("input");

    console.log("result day 08 - part 1:", result);
  });
});
