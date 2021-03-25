import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

/**
 * See: https://en.wikipedia.org/wiki/Digraph_(orthography)
 * E.g. CZ: ch, SK: dz / dž / ch
 */
export class Digraph
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "digraph";

  constructor(init?: Partial<Digraph>) {
    super();
    Object.assign(this, init);
  }
}
