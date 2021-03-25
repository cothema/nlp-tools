import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
export declare class Syllable extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    accent?: boolean;
    constructor(init?: Partial<Syllable>);
}
