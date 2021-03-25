import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

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
