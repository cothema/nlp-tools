import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

export class PhoneNumber
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "phone-number";

  constructor(init?: Partial<PhoneNumber>) {
    super();
    Object.assign(this, init);
  }
}
