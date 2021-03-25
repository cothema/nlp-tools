import { IRegExpValidator } from "../interfaces/IRegExpValidator";
import { IStringable } from "../interfaces/IStringable";
export declare class RegExpValidator implements IRegExpValidator {
    regExp: RegExp;
    validate(candidate: IStringable): boolean;
}
