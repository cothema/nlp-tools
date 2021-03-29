import { IStringable } from "@cothema/nlp-model";

export class NumberValidator {
  validate(input: IStringable): boolean {
    const pattern = /^[+-]?([0-9]{1,3})*([0-9]{1,3})?$/;
    return pattern.test(input.toString());
  }
}
