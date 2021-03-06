import { LexicologyVerbalType } from "@cothema/nlp-model";
import { CsVerbalTypeClassifier } from "./CsVerbalTypeClassifier";

describe("CsVerbalTypeClassifier", () => {
  test("Classify (DB)", async () => {
    const repositoryMock = {
      findWordWithSpecification: async (word: string) => {
        return [
          { noun_id: true },
        ];
      },
    };

    const classifier = new CsVerbalTypeClassifier(repositoryMock);

    expect(
      (await classifier.classifyFromString("aparátu")).verbalType.filter(
        (x) => x.lang === "lang-cs" && x.type === LexicologyVerbalType.noun,
      ).length,
    ).toBeGreaterThan(0);
    expect(
      (await classifier.classifyFromString("kočka")).verbalType.filter(
        (x) => x.lang === "lang-cs",
      ).length,
    ).toBeGreaterThan(0);
  });
});
