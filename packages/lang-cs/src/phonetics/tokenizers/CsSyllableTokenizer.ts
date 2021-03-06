import { IStringableTokenizer, StringableTokenizer } from "@cothema/nlp-core";
import { IStringable, Phone, Syllable, Token } from "@cothema/nlp-model";
import { CsDiphthongList } from "../lists/CsDiphthongList";
import { CsVowelList } from "../lists/CsVowelList";
import { CsSimplePhoneTokenizer } from "./CsSimplePhoneTokenizer";

export class CsSyllableTokenizer
  extends StringableTokenizer
  implements IStringableTokenizer<Syllable> {
  private newSyllableBuffer: Token<Phone>[];
  private syllablesBuffer: Token<Syllable>[];
  private vowelCounter: number;
  private consonantCounter: number;
  private inputStrAsArray: string[];

  tokenize(input: IStringable): Token<Syllable>[] {
    this.clearBuffer();
    this.inputStrAsArray = Array.from(input.toString());

    const phoneTokenizer = new CsSimplePhoneTokenizer();

    const phoneTokens = phoneTokenizer.tokenize(input);

    for (let i = 0; phoneTokens[i]; i++) {
      this.newSyllableBuffer.push(phoneTokens[i]);

      if (!phoneTokens[i + 1]) {
        // Solve last phone
        this.pushNewSyllable();
      }

      if (this.isVowel(phoneTokens[i])) {
        // Is vowel
        if (
          (phoneTokens[i + 1] &&
            phoneTokens[i + 2] &&
            !this.isVowel(phoneTokens[i + 1]) &&
            this.isVowel(phoneTokens[i + 2])) ||
          (phoneTokens[i + 1] && this.isVowel(phoneTokens[i + 1])) ||
          (phoneTokens[i + 1] &&
            phoneTokens[i + 2] &&
            !this.isVowel(phoneTokens[i + 1]) &&
            this.isVowel(phoneTokens[i + 2])) ||
          (phoneTokens[i + 1] &&
            phoneTokens[i + 2] &&
            !phoneTokens[i + 3] &&
            !this.isVowel(phoneTokens[i + 1]) &&
            this.isVowel(phoneTokens[i + 2]))
        ) {
          this.pushNewSyllable();
          continue;
        }

        this.vowelCounter++;
      } else {
        // Is consonant
        if (
          (this.vowelCounter && phoneTokens[i + 2]) || // TODO: regexp: if no vowel till the end, no cut
          (phoneTokens[i + 1] &&
            phoneTokens[i + 2] &&
            this.vowelCounter &&
            !this.isVowel(phoneTokens[i + 1]) &&
            this.isVowel(phoneTokens[i + 2])) ||
          (phoneTokens[i + 1] &&
            phoneTokens[i + 2] &&
            phoneTokens[i + 3] &&
            !phoneTokens[i + 4] &&
            !this.isVowel(phoneTokens[i + 1]) &&
            this.isVowel(phoneTokens[i + 2]) &&
            !this.isVowel(phoneTokens[i + 3])) ||
          (phoneTokens[i + 1] &&
            phoneTokens[i + 2] &&
            !phoneTokens[i + 3] &&
            !this.isVowel(phoneTokens[i + 1]) &&
            this.isVowel(phoneTokens[i + 2]))
        ) {
          this.pushNewSyllable();
          continue;
        }

        this.consonantCounter++;
      }
    }

    return this.syllablesBuffer;
  }

  private clearBuffer() {
    this.newSyllableBuffer = [];
    this.syllablesBuffer = [];
    this.vowelCounter = 0;
    this.consonantCounter = 0;
  }

  private isVowel(phoneToken: Token<Phone>) {
    return CsVowelList.list
      .concat(CsDiphthongList.list)
      .includes(phoneToken.fragment.toString());
  }

  /**
   * Check origin length as diff between end and start (it solves spaces and
   * extra chars between).
   */
  private solveOrigLength(entityArray: Token[]): number {
    const firstEntity = entityArray[0];
    const lastEntity = entityArray[entityArray.length - 1];

    let lowestIndex = firstEntity.origIndex;
    let highestIndex = lastEntity.origIndex + lastEntity.origLength - 1;

    return highestIndex - lowestIndex + 1;
  }

  private pushNewSyllable() {
    if (this.newSyllableBuffer.length) {
      this.syllablesBuffer.push(
        new Token({
          fragment: new Syllable({
            string: this.newSyllableBuffer
              .map((x) => x.fragment.toString())
              .join(""),
          }),
          origIndex: this.newSyllableBuffer[0].origIndex,
          origLength: this.solveOrigLength(this.newSyllableBuffer),
          orig: this.inputStrAsArray,
        }),
      );
    }
    this.newSyllableBuffer = [];
    this.vowelCounter = 0;
    this.consonantCounter = 0;
  }
}
