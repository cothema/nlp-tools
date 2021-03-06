import { Dictionary } from "@cothema/nlp-core";
import { Char } from "@cothema/nlp-model";
import { CharTokenizer } from "../tokenizers/CharTokenizer";

export class RemoveDiacriticsNormalizer {
  dictionary = new Dictionary<string>({
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ý: "y",
    ž: "z",
    š: "s",
    č: "c",
    ř: "r",
    ď: "d",
    ť: "t",
    ň: "n",
    ů: "u",
  });

  normalizeString(chars: string): string {
    const charsEntities = new CharTokenizer().tokenizeToEntities(chars);
    return this.normalizeChars(charsEntities)
      .map((x) => x.string)
      .join("");
  }

  normalizeChars(chars: Char[]): Char[] {
    const out: Char[] = [];
    for (const char of chars) {
      let outChar = this.dictionary.translateElement(
        char.toString().toLowerCase(),
      );

      if (outChar === undefined) {
        outChar = char.toString();
      }

      out.push(new Char({ string: outChar }));
    }
    return out;
  }
}
