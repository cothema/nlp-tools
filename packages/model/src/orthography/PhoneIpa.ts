import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { TokenizableStringableEntity } from "../../../core/src/model/TokenizableStringableEntity";

/**
 * IPA phone transcription
 * @see https://en.wikipedia.org/wiki/International_Phonetic_Alphabet
 */
export class PhoneIpa
  extends TokenizableStringableEntity
  implements ITypeMarked {
  type = "phone-ipa";

  constructor(init?: Partial<PhoneIpa>) {
    super();
    Object.assign(this, init);
  }
}
