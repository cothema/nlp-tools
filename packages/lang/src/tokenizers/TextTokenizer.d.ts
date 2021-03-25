import { Sentence } from "../../../@model/src/orthography/Sentence";
import { Text } from "../../../@model/src/orthography/Text";
import { Word } from "../../../@model/src/orthography/Word";
import { SentenceModality } from "../semantics/enums/SentenceModality";
export declare class TextTokenizer {
    static readonly interpunction: string[];
    static getWords(input: Text | Sentence): Word[];
    static removeInterpunction(input: string): string;
    static getSentences(text: Text): Sentence[];
    static getSentenceType(sentence: Sentence): SentenceModality | null;
}
