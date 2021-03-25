import { IRegExpValidator } from "../interfaces/IRegExpValidator";
import { IStringable } from "../../../model/src/core/interfaces/IStringable";
import { IStringableTokenizer } from "../interfaces/IStringableTokenizer";
import { Token } from "../../../model/src/core/Token";
import { TokenizableStringableEntity } from "../../../model/src/core/TokenizableStringableEntity";
import { StringableTokenizer } from "./StringableTokenizer";

export class RegExpTokenizer<
    T extends TokenizableStringableEntity = TokenizableStringableEntity
  >
  extends StringableTokenizer<T>
  implements IStringableTokenizer<T> {
  validator: IRegExpValidator;

  tokenize(input: IStringable): Token<T>[] {
    let outputs: Token<T>[] = [];
    let match: RegExpExecArray;

    while ((match = this.validator.regExp.exec(input.toString()))) {
      outputs.push(
        new Token<T>({
          origIndex: match.index,
          origLength: match[0].length,
          fragment: this.entityFactory({
            string: match[0],
          }) as T,
        }),
      );
    }

    if (this.filter) {
      outputs = outputs.filter(this.filter);
    }

    return outputs;
  }
}
