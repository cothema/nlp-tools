import { IStringableTokenizer } from "@cothema/nlp-core";
import { RegExpTokenizer } from "@cothema/nlp-core";
import { EmailAddress } from "@cothema/nlp-model";
import { EmailAddressValidator } from "../validators/EmailAddressValidator";

export class EmailAddressTokenizer
  extends RegExpTokenizer<EmailAddress>
  implements IStringableTokenizer<EmailAddress> {
  validator = new EmailAddressValidator();
  entityFactory = (a) => new EmailAddress(a);
}
