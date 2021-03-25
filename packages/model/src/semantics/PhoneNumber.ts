import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

export class PhoneNumber
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "phone-number";

  constructor(init?: Partial<PhoneNumber>) {
    super();
    Object.assign(this, init);
  }
}
