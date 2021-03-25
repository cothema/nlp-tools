import { IClonable } from "../../../core/src/interfaces/IClonable";
import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";
import { SentenceModality } from "../../../lang/src/semantics/enums/SentenceModality";

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
