import { IStringable } from "../../../model/src/core/interfaces/IStringable";

export interface IValidator<T = IStringable> {
  validate(candidate: T): boolean;
}
