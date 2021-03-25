import { IConverter } from "../../../../@core/src/interfaces/IConverter";
import { Dictionary } from "../../../../@core/src/tools/Dictionary";
import { Char } from "../../../../@model/src/orthography/Char";
import { Phone } from "../../../../@model/src/orthography/Phone";
import { PhoneIpa } from "../../../../@model/src/orthography/PhoneIpa";
/**
 * Convert phones to IPA transcription
 */
export declare class CsSimplePhonesToIpaConverter implements IConverter<Char[], Phone[]> {
    /**
     * @see https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%A1_abeceda
     */
    dictionary: Dictionary<string[]>;
    convert(phones: Phone[]): PhoneIpa[];
}
