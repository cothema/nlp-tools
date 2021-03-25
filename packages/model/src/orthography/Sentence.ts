import { IClonable } from "../core/interfaces/IClonable";
import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";
import { SentenceModality } from "../sematics/enums/SentenceModality";

export class Sentence
  extends TokenizableStringableEntity
  implements ITypeMarked, IClonable {
  type = "sentence";
  string: string;
  sentenceType: SentenceModality;

  constructor(init?: Partial<Sentence>) {
    super();
    Object.assign(this, init);
  }
}
