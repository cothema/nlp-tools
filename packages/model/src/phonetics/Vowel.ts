import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

export class Vowel extends TokenizableStringableEntity implements ITypeMarked {
  type = "vowel";

  constructor(init?: Partial<Vowel>) {
    super();
    Object.assign(this, init);
  }
}
