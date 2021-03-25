import { IStringable } from "../interfaces/IStringable";
import { ITypeMarked } from "../interfaces/ITypeMarked";
export declare class StringableEntity implements IStringable, ITypeMarked {
    type: string;
    string?: string;
    constructor(init?: Partial<StringableEntity>);
    toString(): string;
    /**
     * You should call e.g. new StringableEntity(entity.clone()) to be able
     * to class fully with methods.
     */
    clone(): StringableEntity;
}
