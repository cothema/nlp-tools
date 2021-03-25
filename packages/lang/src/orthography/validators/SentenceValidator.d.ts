import { RegExpValidator } from "../../../../@core/src/tokenizers/RegExpValidator";
export declare class SentenceValidator extends RegExpValidator {
    /**
     * Regular expression is used from NaturalNode/natural library from
     * Github.com: https://github.com/NaturalNode/natural
     * Original license: MIT
     */
    regExp: RegExp;
}
