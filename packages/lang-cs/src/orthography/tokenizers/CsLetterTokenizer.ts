import { Digraph } from "@cothema/nlp-model";
import { LetterTokenizer } from "@cothema/nlp-lang";

/**
 * Includes only letters from alphabet (no spaces, special chars, punctuation etc.)
 */
export class CsLetterTokenizer extends LetterTokenizer {
  constructor() {
    super();
    this.digraphs = this.digraphs.concat(
      ["ch"].map((x) => new Digraph({ string: x })),
    );
  }
}
