import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

/**
 * Single character from alphabet. Can be uppercase or lowercase.
 */
export class Char extends TokenizableStringableEntity implements ITypeMarked {
  type = "char";

  constructor(init?: Partial<Char>) {
    super();
    Object.assign(this, init);
  }
}
