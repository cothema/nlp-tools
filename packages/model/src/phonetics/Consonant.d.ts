import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
export declare class Consonant extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    constructor(init?: Partial<Consonant>);
}
