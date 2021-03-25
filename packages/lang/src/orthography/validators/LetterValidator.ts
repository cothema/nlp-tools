import { IStringable } from "@cothema/nlp-model";
import { LetterList } from "../lists/LetterList";

export class LetterValidator {
  validate(letterCandidate: IStringable): boolean {
    return !!LetterList.list.find(
      (x) => x === letterCandidate.toString().toLowerCase(),
    );
  }
}
