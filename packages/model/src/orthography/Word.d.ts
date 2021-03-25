import { LexicologyVerbalType } from "../../../@lang/src/lexicology/enums/LexicologyVerbalType";
import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
export declare class Word extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    tags?: {
        type: string;
        tagType: string;
        probability: number;
    }[];
    pronunciation?: string;
    verbalType?: {
        type?: LexicologyVerbalType;
        lang?: string;
        probability?: number;
        details?: any;
    }[];
    constructor(init?: Partial<Word>);
}
