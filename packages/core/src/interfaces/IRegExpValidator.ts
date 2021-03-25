import { IStringable } from "../../../model/src/core/interfaces/IStringable";
import { IValidator } from "./IValidator";

export interface IRegExpValidator<T = IStringable> extends IValidator {
  regExp: RegExp;
}
