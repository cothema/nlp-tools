import { IStringable } from "../../../../core/src/interfaces/IStringable";

export class CsVowelValidator {
  validate(input: IStringable): boolean {
    for (const inputElement of input.toString()) {
    }
    return true;
  }
}
