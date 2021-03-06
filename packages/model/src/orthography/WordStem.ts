import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

/**
 * Stem of the word (e.g. cz: stav for výstavní)
 */
export class WordStem
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "word-stem";

  constructor(init?: Partial<WordStem>) {
    super();
    Object.assign(this, init);
  }
}
