import { IRule } from "../../../model/src/core/interfaces/IRule";

export interface IRuleBook<T> {
  rules: IRule<T>[];
}
