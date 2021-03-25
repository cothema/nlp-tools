import { IStringable } from "../interfaces/IStringable";
import { IStringableTokenizer } from "../interfaces/IStringableTokenizer";
import { Token } from "../model/Token";
import { TokenizableStringableEntity } from "../model/TokenizableStringableEntity";
import { StringableTokenizer } from "./StringableTokenizer";
export declare class SplitRegExpTokenizer<T extends TokenizableStringableEntity = TokenizableStringableEntity> extends StringableTokenizer<T> implements IStringableTokenizer<T> {
    splitRegExp: RegExp;
    tokenize(input: IStringable): Token<T>[];
}
