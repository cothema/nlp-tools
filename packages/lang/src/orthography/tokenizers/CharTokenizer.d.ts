import { IStringable } from "../../../../@core/src/interfaces/IStringable";
import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { Token } from "../../../../@core/src/model/Token";
import { RegExpTokenizer } from "../../../../@core/src/tokenizers/RegExpTokenizer";
import { Char } from "../../../../@model/src/orthography/Char";
export declare class CharTokenizer extends RegExpTokenizer<Char> implements IStringableTokenizer<Char> {
    tokenize(input: IStringable): Token<Char>[];
}
