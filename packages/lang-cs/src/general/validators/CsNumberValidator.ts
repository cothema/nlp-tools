import { IStringable } from "@cothema/nlp-model";

export class CsNumberValidator {
  validate(input: IStringable): boolean {
    const pattern = /^[+-]?([0-9]{1,3}[ ]?)*([0-9]{1,3})(\.)?$/;
    return pattern.test(input.toString());
  }
}
