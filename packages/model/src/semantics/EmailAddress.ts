import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

export class EmailAddress
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "email-address";

  constructor(init?: Partial<EmailAddress>) {
    super();
    Object.assign(this, init);
  }
}
