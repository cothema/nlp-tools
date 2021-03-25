import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { SplitRegExpTokenizer } from "../../../../@core/src/tokenizers/SplitRegExpTokenizer";
import { Word } from "../../../../@model/src/orthography/Word";
export declare class WordTokenizer extends SplitRegExpTokenizer<Word> implements IStringableTokenizer<Word> {
    splitRegExp: RegExp;
}