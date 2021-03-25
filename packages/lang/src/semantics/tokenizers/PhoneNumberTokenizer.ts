import { IStringableTokenizer } from "../../../../core/src/interfaces/IStringableTokenizer";
import { RegExpTokenizer } from "../../../../core/src/tokenizers/RegExpTokenizer";
import { PhoneNumber } from "../../../../model/src/semantics/PhoneNumber";
import { PhoneNumberValidator } from "../validators/PhoneNumberValidator";

export class PhoneNumberTokenizer
  extends RegExpTokenizer<PhoneNumber>
  implements IStringableTokenizer<PhoneNumber> {
  validator = new PhoneNumberValidator();
  entityFactory = (a) => new PhoneNumber(a);
}
