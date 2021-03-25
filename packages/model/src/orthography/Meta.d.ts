import { IRule } from "../../../@core/src/interfaces/IRule";
import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
/**
 * Meta object
 */
export declare class Meta<T> extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    entity: T;
    rulesApplied: IRule<T>[];
    constructor(init?: Partial<Meta<T>>);
}
