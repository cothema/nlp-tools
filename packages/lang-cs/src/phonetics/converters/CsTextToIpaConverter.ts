import { IConverter } from "@cothema/nlp-core";
import { IStringable } from "@cothema/nlp-model";
import { PhoneIpa } from "@cothema/nlp-model";
import { CsSimplePhoneTokenizer } from "../tokenizers/CsSimplePhoneTokenizer";
import { CsSimplePhonesToIpaConverter } from "./CsSimplePhonesToIpaConverter";

/**
 * Convert text to IPA transcription
 */
export class CsTextToIpaConverter
  implements IConverter<IStringable, PhoneIpa[]> {
  convert(text: IStringable): PhoneIpa[] {
    const phoneTokenizer = new CsSimplePhoneTokenizer();
    const phoneTokens = phoneTokenizer.tokenize(text);
    const ipaConverter = new CsSimplePhonesToIpaConverter();

    return ipaConverter.convert(phoneTokens.map((token) => token.fragment));
  }
}
