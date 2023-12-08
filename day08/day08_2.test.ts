import { day08_2 } from "./day08_2";

describe("Day 08", () => {
  test("Works with test input 1", () => {
    const result = day08_2("test3");

    expect(result).toBe(6);
  });

  test.only("Show answer of puzzle 2", () => {
    const result = day08_2("input");

    console.log("result day 08 - part 2:", result);
  });
});
