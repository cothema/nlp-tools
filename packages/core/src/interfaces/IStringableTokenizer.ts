import { Token } from "../../../model/src/core/Token";
import { TokenizableStringableEntity } from "../../../model/src/core/TokenizableStringableEntity";
import { IStringable } from "../../../model/src/core/interfaces/IStringable";

export interface IStringableTokenizer<
  Entity extends TokenizableStringableEntity
> {
  tokenize(input: IStringable): Token<Entity>[];

  tokenizeToEntities(input: IStringable): Entity[];

  tokenizeToValues(input: IStringable): string[];
}
