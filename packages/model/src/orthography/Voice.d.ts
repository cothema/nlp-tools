import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { Token } from "../../../@core/src/model/Token";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
import { Letter } from "./Letter";
import { Phone } from "./Phone";
/**
 * String of Phones
 */
export declare class Voice extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    phones: Token<Phone, Letter>[];
    constructor(init?: Partial<Voice>);
}
