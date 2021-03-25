import { Token } from "./Token";
import { TokenizableStringableEntity } from "./TokenizableStringableEntity";
export declare class ModifiableToken<T extends TokenizableStringableEntity = TokenizableStringableEntity> extends Token<T> {
    originalIndex?: number;
    originalLength?: number;
    originalEntity?: T;
    constructor(init?: Partial<ModifiableToken<T>>);
    /**
     * It will remove one entity on given index and append new entities instead of
     * it. All entities with higher indexes will be shifted right (including
     * token positions).
     * @param index
     * @param newEntities
     */
    modify(index: number, newStr: string): this;
    private shiftExistingTokens;
    private strSplice;
}
