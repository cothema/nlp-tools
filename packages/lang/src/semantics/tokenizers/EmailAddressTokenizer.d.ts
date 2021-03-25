import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { RegExpTokenizer } from "../../../../@core/src/tokenizers/RegExpTokenizer";
import { EmailAddress } from "../../../../@model/src/semantics/EmailAddress";
import { EmailAddressValidator } from "../validators/EmailAddressValidator";
export declare class EmailAddressTokenizer extends RegExpTokenizer<EmailAddress> implements IStringableTokenizer<EmailAddress> {
    validator: EmailAddressValidator;
    entityFactory: (a: any) => EmailAddress;
}
