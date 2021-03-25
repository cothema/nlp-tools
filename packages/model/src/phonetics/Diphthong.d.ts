import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
/**
 * e.g. au, ou, eu
 */
export declare class Diphthong extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    constructor(init?: Partial<Diphthong>);
}
