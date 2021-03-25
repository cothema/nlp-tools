import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

export class Vowel extends TokenizableStringableEntity implements ITypeMarked {
  type = "vowel";

  constructor(init?: Partial<Vowel>) {
    super();
    Object.assign(this, init);
  }
}
