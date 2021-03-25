import { IStringableTokenizer } from "../../../../core/src/interfaces/IStringableTokenizer";
import { RegExpTokenizer } from "../../../../core/src/tokenizers/RegExpTokenizer";
import { EmailAddress } from "../../../../model/src/semantics/EmailAddress";
import { EmailAddressValidator } from "../validators/EmailAddressValidator";

export class EmailAddressTokenizer
  extends RegExpTokenizer<EmailAddress>
  implements IStringableTokenizer<EmailAddress> {
  validator = new EmailAddressValidator();
  entityFactory = (a) => new EmailAddress(a);
}
