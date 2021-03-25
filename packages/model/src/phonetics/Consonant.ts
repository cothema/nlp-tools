import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

export class Consonant
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "consonant";

  constructor(init?: Partial<Consonant>) {
    super();
    Object.assign(this, init);
  }
}
