import { Token } from "@cothema/nlp-model";
import { ApiService } from "../services/Api.service";

export abstract class AbstractTokenizerService<T> {

  protected abstract apiSubPath: string = "";

  protected constructor(
    protected apiService: ApiService,
  ) {
  }

  async tokenize(
    input: string,
    lang: string = "cs",
  ): Promise<Token<T>[]> {
    const res = await this.apiService.post<T[]>(
      this.apiSubPath + "/tokenize",
      lang,
      { string: input },
    );

    return res.data;
  }

  async tokenizeWithOrig(
    word: string,
    lang: string = "cs",
  ): Promise<{
    syllables: Token<T>[];
    syllablesOrig: Token<T>[];
  }> {
    const tokens = await this.tokenize(word, lang);

    const wordChars = Array.from(word);

    const syllablesOrig = [];

    for (const token of tokens) {
      if (token.origIndex === undefined || token.origLength === undefined) {
        continue;
      }

      syllablesOrig.push(
        // Clone syllables, but change fragment string from original string
        Object.assign(
          {},
          token,
          {
            fragment: {
              string: wordChars.slice(
                token.origIndex,
                token.origIndex + token.origLength,
              ).join(""),
            },
          }) as Token<T>,
      );
    }

    return {
      syllables: tokens,
      syllablesOrig,
    };
  }

}
