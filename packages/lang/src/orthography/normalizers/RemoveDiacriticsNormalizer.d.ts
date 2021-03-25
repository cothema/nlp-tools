import { Dictionary } from "../../../../@core/src/tools/Dictionary";
import { Char } from "../../../../@model/src/orthography/Char";
export declare class RemoveDiacriticsNormalizer {
    dictionary: Dictionary<string>;
    normalizeString(chars: string): string;
    normalizeChars(chars: Char[]): Char[];
}
