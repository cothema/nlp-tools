import { ITypeMarked } from "../../../core/src/interfaces/ITypeMarked";
import { StringableEntity } from "../../../core/src/model/StringableEntity";
import { Sentence } from "./Sentence";
import { Word } from "./Word";

export class Text extends StringableEntity implements ITypeMarked {
  type = "text";
  sentences?: Sentence[];
  words?: Word[];

  constructor(init?: Partial<Text>) {
    super();
    Object.assign(this, init);
  }
}
