import { IStringableTokenizer } from "../../../../core/src/interfaces/IStringableTokenizer";
import { Token } from "../../../../model/src/core/Token";
import { RegExpTokenizer } from "../../../../core/src/tokenizers/RegExpTokenizer";
import { Url } from "../../../../model/src/semantics/Url";
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
