import { IStringable } from "@cothema/nlp-model";

export class CsVowelValidator {
  validate(input: IStringable): boolean {
    for (const inputElement of input.toString()) {
    }
    return true;
  }
}
