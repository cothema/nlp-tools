import { IStringableTokenizer } from "@cothema/nlp-core";
import { RegExpTokenizer } from "@cothema/nlp-core";
import { PhoneNumber } from "@cothema/nlp-model";
import { PhoneNumberValidator } from "../validators/PhoneNumberValidator";

export class PhoneNumberTokenizer
  extends RegExpTokenizer<PhoneNumber>
  implements IStringableTokenizer<PhoneNumber> {
  validator = new PhoneNumberValidator();
  entityFactory = (a) => new PhoneNumber(a);
}
