import { IStringable } from "@cothema/nlp-model";

export interface IValidator<T = IStringable> {
  validate(candidate: T): boolean;
}
