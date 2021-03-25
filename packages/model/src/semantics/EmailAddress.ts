import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

export class EmailAddress
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "email-address";

  constructor(init?: Partial<EmailAddress>) {
    super();
    Object.assign(this, init);
  }
}
