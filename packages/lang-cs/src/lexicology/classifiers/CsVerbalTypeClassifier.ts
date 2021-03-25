import { ICsWordsRepository } from "../../repository/ICsWordsRepository";
import { IClassifier } from "@cothema/nlp-model";
import { LexicologyVerbalType } from "@cothema/nlp-model";
import { Word } from "@cothema/nlp-model";

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
          lang: "lang-cs",
        });
      } else {
        word.verbalType.push({
          probability: 0.9,
          lang: "lang-cs",
        });
      }
    }

    return word;
  }
}
