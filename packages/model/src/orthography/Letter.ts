import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

/**
 * Similar to Char, but includes e.g. ch (ch is single letter that
 * consists of two chars).
 */
export class Letter extends TokenizableStringableEntity implements ITypeMarked {
  type = "letter";

  constructor(init?: Partial<Letter>) {
    super();
    Object.assign(this, init);
  }
}
