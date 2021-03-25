import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
/**
 * Single character from alphabet. Can be uppercase or lowercase.
 */
export declare class Char extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    constructor(init?: Partial<Char>);
}
