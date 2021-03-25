import { IStringable } from "../../../../core/src/interfaces/IStringable";
import { IStringableTokenizer } from "../../../../core/src/interfaces/IStringableTokenizer";
import { Token } from "../../../../core/src/model/Token";
import { RegExpTokenizer } from "../../../../core/src/tokenizers/RegExpTokenizer";
import { Char } from "../../../../model/src/orthography/Char";

export class CharTokenizer
  extends RegExpTokenizer<Char>
  implements IStringableTokenizer<Char> {
  tokenize(input: IStringable): Token<Char>[] {
    const out = [];
    const chars = Array.from(input.toString());
    for (let i = 0; chars[i]; i++) {
      // char = length = 1 (including utf-8 special chars)
      out.push(
        new Token({
          origIndex: i,
          origLength: 1,
          fragment: new Char({ string: chars[i] }),
        }),
      );
    }

    return out;
  }
}
