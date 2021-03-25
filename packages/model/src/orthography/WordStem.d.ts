import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
/**
 * Stem of the word (e.g. cz: stav for výstavní)
 */
export declare class WordStem extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    constructor(init?: Partial<WordStem>);
}
