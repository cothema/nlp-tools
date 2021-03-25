import { IStringable } from "@cothema/nlp-model";

export class CsSimplePhoneValidator {
  validate(input: IStringable): boolean {
    for (const inputElement of input.toString()) {
    }
    return true;
  }
}
