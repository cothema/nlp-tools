import { IStringableTokenizer } from "@cothema/nlp-core";
import { RegExpTokenizer } from "@cothema/nlp-core";
import { Sentence } from "@cothema/nlp-model";
import { SentenceValidator } from "../validators/SentenceValidator";

export class SentenceTokenizer
  extends RegExpTokenizer<Sentence>
  implements IStringableTokenizer<Sentence> {
  validator = new SentenceValidator();
  entityFactory = (a) => new Sentence(a);
}
