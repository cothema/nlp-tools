import { ICsWordsRepository } from "../../../../../@db/repository/lang/cs/ICsWordsRepository";
import { IClassifier } from "../../../../shared/interfaces/IClassifier";
import { LexicologyVerbalType } from "../../../universal/lexicology/enums/LexicologyVerbalType";
import { Word } from "../../../universal/orthography/model/Word";

export class CsVerbalTypeClassifier implements IClassifier<Word> {
  constructor(private csWordsRepository: ICsWordsRepository) {}

  async classifyFromString(word: string) {
    return this.classify(
      new Word({
        string: word,
      }),
    );
  }

  async classify(word: Word) {
    const dbMatchingWords = await this.csWordsRepository.findWordWithSpecification(
      word.string,
    );

    if (!word.verbalType) {
      word.verbalType = [];
    }

    for (const dbMatchingWord of dbMatchingWords) {
      if (dbMatchingWord.noun_id) {
        word.verbalType.push({
          type: LexicologyVerbalType.noun,
          probability: 0.9,
          lang: "cs",
        });
      } else {
        word.verbalType.push({
          probability: 0.9,
          lang: "cs",
        });
      }
    }

    return word;
  }
}
