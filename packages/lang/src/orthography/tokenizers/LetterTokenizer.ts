import { IStringable } from "@cothema/nlp-model";
import { IStringableTokenizer } from "@cothema/nlp-core";
import { Token } from "@cothema/nlp-model";
import { StringableTokenizer } from "@cothema/nlp-core";
import { DigraphHelper } from "../helpers/DigraphHelper";
import { Digraph } from "@cothema/nlp-model";
import { Letter } from "@cothema/nlp-model";
import { LetterValidator } from "../validators/LetterValidator";
import { CharTokenizer } from "./CharTokenizer";

/**
 * Includes only letters from alphabet (no spaces, special chars, punctuation etc.)
 */
export class LetterTokenizer
  extends StringableTokenizer<Letter>
  implements IStringableTokenizer<Letter> {
  validator = new LetterValidator();
  digraphs: Digraph[] = [];

  tokenize(input: IStringable): Token<Letter | Digraph>[] {
    const letterTokens: Token<Letter>[] = [];
    const charTokens = new CharTokenizer().tokenize(input);

    for (let i = 0, tokenIndex = 0; charTokens[i]; i++, tokenIndex++) {
      // Check each char

      if (!this.validator.validate(charTokens[i].fragment)) {
        // Ignore invalid chars (spaces, special chars, punctuation etc.)
        continue;
      }

      const digraph = DigraphHelper.identifyDigraph(
        this.digraphs,
        charTokens.map((x) => x.fragment),
        i,
      );

      if (digraph) {
        // It is digraph
        i += digraph.toString().length - 1; // Skip digraph letters
        letterTokens.push(
          new Token<Letter>({
            origIndex: tokenIndex,
            origLength: digraph.toString().length,
            fragment: digraph,
          }),
        );
        tokenIndex += digraph.toString().length - 1;
      } else {
        // Add single letter (already validated)
        letterTokens.push(
          new Token<Letter>({
            origIndex: tokenIndex,
            origLength: 1,
            fragment: new Letter({ string: charTokens[i].fragment.toString() }),
          }),
        );
      }
    }

    return letterTokens;
  }
}
