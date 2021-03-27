import { Dictionary, IConverter } from "@cothema/nlp-core";
import { Text, Word } from "@cothema/nlp-model";

/**
 * E.g. 8 => osm
 */
export class CsNumberToTextConverter
  implements IConverter<string, Text> {
  dictionary = new Dictionary<string[]>({
    "-": ["mínus"],
    "+": ["plus"],
    "0": ["nula"],
    "1": ["jedna"],
    "2": ["dva"],
    "3": ["tři"],
    "4": ["čtyři"],
    "5": ["pět"],
    "6": ["šest"],
    "7": ["sedm"],
    "8": ["osm"],
    "9": ["devět"],
  });

  convert(numberStr: string): Text {
    const text = new Text();
    text.words = [];

    for (let i = 0; numberStr[i] !== undefined; i++) {
      let outWords: string[] = [];

      if (i === 0 && numberStr[i] === "+") {
        outWords.push("plus");
      } else if (i === 0 && numberStr[i] === "-") {
        outWords.push("mínus");
      } else {
        let translatedNumber = this.dictionary.translateElement(
          numberStr[i].toString(),
        );

        outWords = outWords.concat(translatedNumber);
      }

      for (const word of outWords) {
        text.words.push(new Word({ string: word }));
      }
    }

    return text;
  }
}
