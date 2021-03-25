import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { RegExpTokenizer } from "../../../../@core/src/tokenizers/RegExpTokenizer";
import { Sentence } from "../../../../@model/src/orthography/Sentence";
import { SentenceValidator } from "../validators/SentenceValidator";
export declare class SentenceTokenizer extends RegExpTokenizer<Sentence> implements IStringableTokenizer<Sentence> {
    validator: SentenceValidator;
    entityFactory: (a: any) => Sentence;
}
