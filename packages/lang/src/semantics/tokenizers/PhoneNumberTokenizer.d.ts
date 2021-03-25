import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { RegExpTokenizer } from "../../../../@core/src/tokenizers/RegExpTokenizer";
import { PhoneNumber } from "../../../../@model/src/semantics/PhoneNumber";
import { PhoneNumberValidator } from "../validators/PhoneNumberValidator";
export declare class PhoneNumberTokenizer extends RegExpTokenizer<PhoneNumber> implements IStringableTokenizer<PhoneNumber> {
    validator: PhoneNumberValidator;
    entityFactory: (a: any) => PhoneNumber;
}
