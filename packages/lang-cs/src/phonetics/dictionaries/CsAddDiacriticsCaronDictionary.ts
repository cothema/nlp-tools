import { Dictionary } from "@cothema/nlp-core";

export class CsAddDiacriticsCaronDictionary extends Dictionary {
  constructor() {
    super({
      c: "č",
      d: "ď",
      e: "ě",
      n: "ň",
      r: "ř",
      s: "š",
      t: "ť",
      z: "ž",
    });
  }
}
