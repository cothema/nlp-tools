import { TokenizableStringableEntity } from "../TokenizableStringableEntity";

export interface IClassifier<
  E extends TokenizableStringableEntity = TokenizableStringableEntity
> {
  classify(input: E): Promise<E>;

  classifyFromString(input: string): Promise<E>;
}
