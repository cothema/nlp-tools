import { Dictionary } from "@cothema/nlp-core";

export class CsAddDiacriticsAcuteAccentDictionary extends Dictionary {
  constructor() {
    super({
      a: "á",
      e: "é",
      i: "í",
      o: "ó",
      u: "ú",
      y: "ý",
    });
  }
}
