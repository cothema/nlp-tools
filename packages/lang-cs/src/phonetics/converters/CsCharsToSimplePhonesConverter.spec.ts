import { Char } from "@cothema/nlp-model";
import { CsCharsToSimplePhonesConverter } from "./CsCharsToSimplePhonesConverter";

describe("CsCharsToSimplePhonesConverter", () => {
  test("convert", () => {
    const converter = new CsCharsToSimplePhonesConverter();

    expect(
      converter
        .convert([
          new Char({
            string: "ě",
          }),
        ])[0]
        .toString(),
    ).toBe("j");
  });
});
