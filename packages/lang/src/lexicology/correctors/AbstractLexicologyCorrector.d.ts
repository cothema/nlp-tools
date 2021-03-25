import { ModifiableToken } from "../../../../@core/src/model/ModifiableToken";
import { TokenizableStringableEntity } from "../../../../@core/src/model/TokenizableStringableEntity";
import { LexicologyErrorType } from "../enums/LexicologyErrorType";
import { LexicologyError } from "../model/LexicologyError";
export declare abstract class AbstractLexicologyCorrector<T extends TokenizableStringableEntity = TokenizableStringableEntity> {
    entity: T;
    errors: LexicologyError[];
    provideTokenInfo: boolean;
    constructor(entity: T);
    abstract fixAll(): this;
    getEntity(): T;
    protected fixByMultipleRegExps(matchRegExps: {
        regExp: RegExp;
        replace?: string;
    }[], lexicologyError?: LexicologyErrorType): this;
    protected fixByRegExp(matchRegExp: RegExp, replaceWith?: string, lexicologyError?: LexicologyErrorType): this;
    protected fixInOriginal(newString: string, error: LexicologyErrorType, tokenInfo?: ModifiableToken<T>): this;
}
