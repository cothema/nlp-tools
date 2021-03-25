import { IRule } from "@cothema/nlp-model";

export interface IRuleBook<T> {
  rules: IRule<T>[];
}
