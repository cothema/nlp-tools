import { CsNumberValidator } from "./CsNumberValidator";

describe("CsNumberValidator", () => {
  test("convert", () => {
    const validator = new CsNumberValidator();

    const examplesTrue = [
      "5", "368",
      "+5", "-368",
      "8.", "158.",
      "150 689",
      "147 547 879."
    ];
    const examplesFalse = ["5x", "1+9", "1st", "fixa", "vɪks"];

    examplesTrue.forEach((example) => {
      expect(validator.validate(example)).toBeTruthy();
    });
    examplesFalse.forEach((example) => {
      expect(validator.validate(example)).toBeFalsy();
    });
  });
});
