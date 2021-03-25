import { IStringable } from "@cothema/nlp-model";
import { IValidator } from "./IValidator";

export interface IRegExpValidator<T = IStringable> extends IValidator {
  regExp: RegExp;
}
