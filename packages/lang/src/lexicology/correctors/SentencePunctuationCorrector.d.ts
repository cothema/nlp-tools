import { Sentence } from "../../../../@model/src/orthography/Sentence";
import { AbstractLexicologyCorrector } from "./AbstractLexicologyCorrector";
export declare class SentencePunctuationCorrector extends AbstractLexicologyCorrector<Sentence> {
    fixAll(): this;
    fixLeftExtraWhitespace(): this;
    fixRightExtraWhitespace(): this;
    fixMultipleWhitespace(): this;
    fixWhitespaceBeforeEndPunctuation(): this;
    fixInvalidEndPunctuation(): this;
    fixFirstLetterUpper(): this;
    fixMissingEndPunctuation(): this;
}
