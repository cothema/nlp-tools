import { ICsWordsRepository } from "../../repository/ICsWordsRepository";
import { IClassifier } from "../../../../@core/src/interfaces/IClassifier";
import { Word } from "../../../../@model/src/orthography/Word";
export declare class CsVerbalTypeClassifier implements IClassifier<Word> {
    private csWordsRepository;
    constructor(csWordsRepository: ICsWordsRepository);
    classifyFromString(word: string): Promise<Word>;
    classify(word: Word): Promise<Word>;
}
