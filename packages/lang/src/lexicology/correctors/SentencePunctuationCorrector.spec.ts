import { Sentence } from "../../../../model/src/orthography/Sentence";
import { SentencePunctuationCorrector } from "./SentencePunctuationCorrector";

describe("SentencePunctuationCorrector", () => {
  test("Fix", () => {
    const correctorFactory = (sentence: string) => {
      return new SentencePunctuationCorrector(
        new Sentence({
          string: sentence,
        }),
      );
    };

    const fixAll = (sentence: string) => {
      return correctorFactory(sentence).fixAll().getEntity().toString();
    };

    expect(fixAll("This is me .. ")).toBe("This is me…");

    expect(fixAll(" What's wrong??")).toBe("What's wrong?");

    expect(fixAll("thank you")).toBe("Thank you.");

    expect(fixAll("štěstí")).toBe("Štěstí.");
  });
});
