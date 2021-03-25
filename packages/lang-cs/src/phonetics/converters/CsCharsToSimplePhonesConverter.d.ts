import { IConverter } from "../../../../@core/src/interfaces/IConverter";
import { Dictionary } from "../../../../@core/src/tools/Dictionary";
import { Char } from "../../../../@model/src/orthography/Char";
import { Phone } from "../../../../@model/src/orthography/Phone";
/**
 * See: https://www.pravopisne.cz/2012/01/pravidla-samohlasky-a-souhlasky/#jak-je-to-s-u,-e,-y/y?
 */
export declare class CsCharsToSimplePhonesConverter implements IConverter<Char[], Phone[]> {
    dictionary: Dictionary<string[]>;
    convert(chars: Char[]): Phone[];
}
