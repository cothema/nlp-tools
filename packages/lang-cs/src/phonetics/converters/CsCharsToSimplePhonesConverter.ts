import { IConverter } from "@cothema/nlp-core";
import { Dictionary } from "@cothema/nlp-core";
import { Char } from "@cothema/nlp-model";
import { Phone } from "@cothema/nlp-model";

/**
 * See: https://www.pravopisne.cz/2012/01/pravidla-samohlasky-a-souhlasky/#jak-je-to-s-u,-e,-y/y?
 */
export class CsCharsToSimplePhonesConverter
  implements IConverter<Char[], Phone[]> {
  dictionary = new Dictionary<string[]>({
    ů: ["ú"],
    ě: ["j", "e"],
    y: ["i"],
    ý: ["í"],
  });

  convert(chars: Char[]): Phone[] {
    const phones: Phone[] = [];
    for (const char of chars) {
      const newPhones = this.dictionary.translateElement(
        char.toString().toLowerCase(),
      );
      for (const newPhone of newPhones) {
        phones.push(new Phone({ string: newPhone }));
      }
    }
    return phones;
  }
}
