import { win } from "../bingoLogic";
import { testData } from "./testData";

describe("No Bingos", () => {
  test("no Bingo 1", () => {
    let result = win(testData["gridNoBingo"]);
    expect(result).toEqual([]);
  });
  test("no Bingo 2", () => {
    let result = win(testData["gridNoBingo2"]);
    expect(result).toEqual([]);
  });
  test("no Bingo 3", () => {
    let result = win(testData["gridNoBingo3"]);
    expect(result).toEqual([]);
  });
  test("no Bingo 4", () => {
    let result = win(testData["gridNoBingo4"]);
    expect(result).toEqual([]);
  });
  test("Bingo 1", () => {
    let result = win(testData["gridBingo1"]);
    expect(result).toEqual([
      { orientation: "horizontal", index: 0 },
      { orientation: "vertical", index: 1 },
      { index: null, orientation: "RL" },
    ]);
  });
  test("Bingo 2", () => {
    let result = win(testData["gridBingo2"]);
    expect(result).toEqual([{ orientation: "horizontal", index: 0 }]);
  });
});
