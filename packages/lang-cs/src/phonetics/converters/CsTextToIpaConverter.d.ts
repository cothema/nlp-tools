import { IConverter } from "../../../../@core/src/interfaces/IConverter";
import { IStringable } from "../../../../@core/src/interfaces/IStringable";
import { PhoneIpa } from "../../../../@model/src/orthography/PhoneIpa";
/**
 * Convert text to IPA transcription
 */
export declare class CsTextToIpaConverter implements IConverter<IStringable, PhoneIpa[]> {
    convert(text: IStringable): PhoneIpa[];
}
