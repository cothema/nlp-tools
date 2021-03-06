import { IStringableTokenizer, StringableTokenizer } from "@cothema/nlp-core";
import { Digraph, IStringable, Letter, Token } from "@cothema/nlp-model";
import { DigraphHelper } from "../helpers/DigraphHelper";
import { LetterValidator } from "../validators/LetterValidator";
import { NumberValidator } from "../validators/NumberValidator";
import { CharTokenizer } from "./CharTokenizer";

/**
 * Includes only letters from alphabet (no spaces, special chars, punctuation etc.)
 */
export class LetterTokenizer
  extends StringableTokenizer<Letter>
  implements IStringableTokenizer<Letter> {
  validator = new LetterValidator();
  digraphs: Digraph[] = [];
  allowNumbers: boolean = true;
  numberValidator = new NumberValidator();

  tokenize(input: IStringable): Token<Letter | Digraph>[] {
    const letterTokens: Token<Letter>[] = [];
    const charTokens = new CharTokenizer().tokenize(input);

    for (let i = 0, tokenIndex = 0; charTokens[i]; i++, tokenIndex++) {
      // Check each char

      if (
        this.validator.validate(charTokens[i].fragment)
        ||
        (this.allowNumbers === true && this.numberValidator.validate(charTokens[i].fragment))
      ) {
        // OK
      } else {
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
