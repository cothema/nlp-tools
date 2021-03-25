import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
/**
 * See: https://en.wikipedia.org/wiki/Phone_(phonetics)
 * Can be only lowercase
 */
export declare class Phone extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    constructor(init?: Partial<Phone>);
}
