import { IStringable } from "@cothema/nlp-model";
import { IStringableTokenizer } from "../interfaces/IStringableTokenizer";
import { IValidator } from "../interfaces/IValidator";
import { Token } from "@cothema/nlp-model";
import { TokenizableStringableEntity } from "@cothema/nlp-model";

export abstract class StringableTokenizer<
  T extends TokenizableStringableEntity = TokenizableStringableEntity
> implements IStringableTokenizer<T> {
  validator: IValidator;
  filter: (e: Token<T>) => boolean;

  entityFactory: (
    a: Partial<TokenizableStringableEntity>,
  ) => TokenizableStringableEntity = (a) => new TokenizableStringableEntity(a);

  abstract tokenize(input: IStringable): Token<T>[];

  tokenizeToEntities(input: IStringable): T[] {
    return this.tokenize(input).map((x) => x.fragment);
  }

  tokenizeToOriginalValues(input: IStringable): string[] {
    return this.tokenize(input).map((x) =>
      x.orig
        .slice(x.origIndex, x.origIndex + x.origLength)
        .map((orig) => orig.toString())
        .join(""),
    );
  }

  tokenizeToValues(input: IStringable): string[] {
    return this.tokenize(input).map((x) => x.fragment.toString());
  }

  tokenizeToValue(input: IStringable): string {
    return this.tokenizeToValues(input).join("");
  }
}
