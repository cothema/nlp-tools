import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { Token } from "../core/Token";
import { TokenizableStringableEntity } from "../core/TokenizableStringableEntity";
import { Letter } from "./Letter";
import { Phone } from "./Phone";

/**
 * String of Phones
 */
export class Voice extends TokenizableStringableEntity implements ITypeMarked {
  type = "voice";
  phones: Token<Phone, Letter>[];

  constructor(init?: Partial<Voice>) {
    super();
    Object.assign(this, init);
  }
}
