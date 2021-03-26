import { IClonable } from "../core/interfaces/IClonable";
import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { Token } from "../core/Token";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";
import { SentenceModality } from "../sematics/enums/SentenceModality";
import { Word } from "./Word";

export class Sentence
  extends TokenizableStringableEntity
  implements ITypeMarked, IClonable {
  type = "sentence";
  sentenceType?: SentenceModality;
  words?: Token<Word>[];

  constructor(init?: Partial<Sentence>) {
    super();
    Object.assign(this, init);
  }
}
