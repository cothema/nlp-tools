import { IStringable } from "../interfaces/IStringable";
import { IStringableTokenizer } from "../interfaces/IStringableTokenizer";
import { IValidator } from "../interfaces/IValidator";
import { Token } from "../model/Token";
import { TokenizableStringableEntity } from "../model/TokenizableStringableEntity";
export declare abstract class StringableTokenizer<T extends TokenizableStringableEntity = TokenizableStringableEntity> implements IStringableTokenizer<T> {
    validator: IValidator;
    filter: (e: Token<T>) => boolean;
    entityFactory: (a: Partial<TokenizableStringableEntity>) => TokenizableStringableEntity;
    abstract tokenize(input: IStringable): Token<T>[];
    tokenizeToEntities(input: IStringable): T[];
    tokenizeToOriginalValues(input: IStringable): string[];
    tokenizeToValues(input: IStringable): string[];
    tokenizeToValue(input: IStringable): string;
}
