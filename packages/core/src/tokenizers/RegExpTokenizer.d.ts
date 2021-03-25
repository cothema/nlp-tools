import { IRegExpValidator } from "../interfaces/IRegExpValidator";
import { IStringable } from "../interfaces/IStringable";
import { IStringableTokenizer } from "../interfaces/IStringableTokenizer";
import { Token } from "../model/Token";
import { TokenizableStringableEntity } from "../model/TokenizableStringableEntity";
import { StringableTokenizer } from "./StringableTokenizer";
export declare class RegExpTokenizer<T extends TokenizableStringableEntity = TokenizableStringableEntity> extends StringableTokenizer<T> implements IStringableTokenizer<T> {
    validator: IRegExpValidator;
    tokenize(input: IStringable): Token<T>[];
}
