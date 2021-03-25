import { IStringable } from "../../../../@core/src/interfaces/IStringable";
import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { Token } from "../../../../@core/src/model/Token";
import { StringableTokenizer } from "../../../../@core/src/tokenizers/StringableTokenizer";
import { Syllable } from "../../../../@model/src/phonetics/Syllable";
export declare class CsSyllableTokenizer extends StringableTokenizer implements IStringableTokenizer<Syllable> {
    private newSyllableBuffer;
    private syllablesBuffer;
    private vowelCounter;
    private consonantCounter;
    private inputStrAsArray;
    tokenize(input: IStringable): Token<Syllable>[];
    private clearBuffer;
    private isVowel;
    /**
     * Check origin length as diff between end and start (it solves spaces and
     * extra chars between).
     */
    private solveOrigLength;
    private pushNewSyllable;
}
