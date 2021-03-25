import { IConverter } from "../../../../core/src/interfaces/IConverter";
import { Dictionary } from "../../../../core/src/tools/Dictionary";
import { Char } from "../../../../model/src/orthography/Char";
import { Phone } from "../../../../model/src/orthography/Phone";
import { PhoneIpa } from "../../../../model/src/orthography/PhoneIpa";

/**
 * Convert phones to IPA transcription
 */
export class CsSimplePhonesToIpaConverter
  implements IConverter<Char[], Phone[]> {
  /**
   * @see https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%A1_abeceda
   */
  dictionary = new Dictionary<string[]>({
    á: ["aː"],
    c: ["ts"],
    č: ["tʃ"],
    ď: ["ɟ"],
    e: ["ɛ"],
    é: ["ɛː"],
    h: ["ɦ"],
    ch: ["x"],
    i: ["ɪ"],
    í: ["iː"],
    ň: ["ɲ"],
    ó: ["oː"],
    ř: ["r̝"],
    š: ["ʃ"],
    ť: ["c"],
    ú: ["uː"],
    x: ["ks"],
    y: ["ɪ"],
    ž: ["ʒ"],
  });

  convert(phones: Phone[]): PhoneIpa[] {
    const phonesIpa: PhoneIpa[] = [];

    for (const phone of phones) {
      let phonesIpaString = this.dictionary.translateElement(phone.toString());

      // TODO: IPA validator
      phonesIpaString ??= [phone.toString()];

      for (const newPhoneIpa of phonesIpaString) {
        phonesIpa.push(new PhoneIpa({ string: newPhoneIpa }));
      }
    }

    return phonesIpa;
  }
}
