import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

export class Url extends TokenizableStringableEntity implements ITypeMarked {
  type = "email-address";

  constructor(init?: Partial<Url>) {
    super();
    Object.assign(this, init);
  }
}
