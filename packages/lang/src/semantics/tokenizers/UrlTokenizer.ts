import { IStringableTokenizer } from "@cothema/nlp-core";
import { Token } from "@cothema/nlp-model";
import { RegExpTokenizer } from "@cothema/nlp-core";
import { Url } from "@cothema/nlp-model";
import { EmailAddressValidator } from "../validators/EmailAddressValidator";
import { UrlValidator } from "../validators/UrlValidator";

export class UrlTokenizer
  extends RegExpTokenizer<Url>
  implements IStringableTokenizer<Url> {
  validator = new UrlValidator();
  entityFactory = (a) => new Url(a);
  filter = (x: Token<Url>) =>
    !new EmailAddressValidator().validate(x.fragment.toString()); // Filter out email addresses
}
