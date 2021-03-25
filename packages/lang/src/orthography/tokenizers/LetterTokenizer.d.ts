import { IStringable } from "../../../../@core/src/interfaces/IStringable";
import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { Token } from "../../../../@core/src/model/Token";
import { StringableTokenizer } from "../../../../@core/src/tokenizers/StringableTokenizer";
import { Digraph } from "../../../../@model/src/orthography/Digraph";
import { Letter } from "../../../../@model/src/orthography/Letter";
import { LetterValidator } from "../validators/LetterValidator";
/**
 * Includes only letters from alphabet (no spaces, special chars, punctuation etc.)
 */
export declare class LetterTokenizer extends StringableTokenizer<Letter> implements IStringableTokenizer<Letter> {
    validator: LetterValidator;
    digraphs: Digraph[];
    tokenize(input: IStringable): Token<Letter | Digraph>[];
}
