import { ITypeMarked } from "../../../@core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../@core/src/model/TokenizableStringableEntity";
/**
 * IPA phone transcription
 * @see https://en.wikipedia.org/wiki/International_Phonetic_Alphabet
 */
export declare class PhoneIpa extends TokenizableStringableEntity implements ITypeMarked {
    type: string;
    constructor(init?: Partial<PhoneIpa>);
}
