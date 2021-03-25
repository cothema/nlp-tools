import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

export class Consonant
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "consonant";

  constructor(init?: Partial<Consonant>) {
    super();
    Object.assign(this, init);
  }
}
