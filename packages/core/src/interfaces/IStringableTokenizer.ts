import { Token } from "@cothema/nlp-model";
import { TokenizableStringableEntity } from "@cothema/nlp-model";
import { IStringable } from "@cothema/nlp-model";

export interface IStringableTokenizer<
  Entity extends TokenizableStringableEntity
> {
  tokenize(input: IStringable): Token<Entity>[];

  tokenizeToEntities(input: IStringable): Entity[];

  tokenizeToValues(input: IStringable): string[];
}
