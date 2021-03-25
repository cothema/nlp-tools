import { IClonable } from "../interfaces/IClonable";
import { ModifiableToken } from "./ModifiableToken";
import { StringableEntity } from "./StringableEntity";
export declare class TokenizableStringableEntity extends StringableEntity implements IClonable {
    tokenInfoList: ModifiableToken<this>[];
    constructor(init?: Partial<TokenizableStringableEntity>);
    /**
     * Be careful, because non trivial datatypes will remain as pointers if
     * they will not be cloned manually!
     */
    clone(): this;
}
