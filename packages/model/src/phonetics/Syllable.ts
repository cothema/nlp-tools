import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

export class Syllable
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "syllable";
  accent?: boolean;

  constructor(init?: Partial<Syllable>) {
    super();
    Object.assign(this, init);
  }
}
