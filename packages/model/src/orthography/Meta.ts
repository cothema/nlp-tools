import { IRule } from "../core/interfaces/IRule";
import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";

/**
 * Meta object
 */
export class Meta<T>
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "meta";
  entity: T;
  rulesApplied: IRule<T>[] = [];

  constructor(init?: Partial<Meta<T>>) {
    super();
    Object.assign(this, init);
  }
}
