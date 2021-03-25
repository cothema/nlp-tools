import { IStringable } from "../../../../model/src/core/interfaces/IStringable";

export class CsSimplePhoneValidator {
  validate(input: IStringable): boolean {
    for (const inputElement of input.toString()) {
    }
    return true;
  }
}
