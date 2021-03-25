import { Dictionary } from "../../../../core/src/tools/Dictionary";

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
