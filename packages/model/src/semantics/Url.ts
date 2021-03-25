import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

export class Url extends TokenizableStringableEntity implements ITypeMarked {
  type = "email-address";

  constructor(init?: Partial<Url>) {
    super();
    Object.assign(this, init);
  }
}
