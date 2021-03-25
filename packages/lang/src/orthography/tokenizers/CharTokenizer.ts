import { IStringable } from "@cothema/nlp-model";
import { IStringableTokenizer } from "@cothema/nlp-core";
import { Token } from "@cothema/nlp-model";
import { RegExpTokenizer } from "@cothema/nlp-core";
import { Char } from "@cothema/nlp-model";

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
