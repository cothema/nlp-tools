import { IStringableTokenizer } from "@cothema/nlp-core";
import { SplitRegExpTokenizer } from "@cothema/nlp-core";
import { Word } from "@cothema/nlp-model";

export class WordTokenizer
  extends SplitRegExpTokenizer<Word>
  implements IStringableTokenizer<Word> {
  splitRegExp = /[\s\?!"'<>,\.…]+/g;
}
