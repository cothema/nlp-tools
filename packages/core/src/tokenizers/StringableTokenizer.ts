import { IStringable } from "../../../model/src/core/interfaces/IStringable";
import { IStringableTokenizer } from "../interfaces/IStringableTokenizer";
import { IValidator } from "../interfaces/IValidator";
import { Token } from "../../../model/src/core/Token";
import { TokenizableStringableEntity } from "../../../model/src/core/TokenizableStringableEntity";

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
