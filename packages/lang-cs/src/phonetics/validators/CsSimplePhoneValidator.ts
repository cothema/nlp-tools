import { IStringable } from "../../../../core/src/interfaces/IStringable";

export class CsSimplePhoneValidator {
  validate(input: IStringable): boolean {
    for (const inputElement of input.toString()) {
    }
    return true;
  }
}
