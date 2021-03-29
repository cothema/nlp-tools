import { NumberValidator } from "./NumberValidator";

describe("NumberValidator", () => {
  test("convert", () => {
    const validator = new NumberValidator();

    const examplesTrue = [
      "5", "368",
      "+5", "-368",
      "8.", "158.",
      "150689",
      "147547879"
    ];
    const examplesFalse = ["5x", "1+9", "fixa", "vɪks"];

    examplesTrue.forEach((example) => {
      expect(validator.validate(example)).toBeTruthy();
    });
    examplesFalse.forEach((example) => {
      expect(validator.validate(example)).toBeFalsy();
    });
  });
});
