import { IConverter } from "../../../../core/src/interfaces/IConverter";
import { IStringable } from "../../../../core/src/interfaces/IStringable";
import { PhoneIpa } from "../../../../model/src/orthography/PhoneIpa";
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
