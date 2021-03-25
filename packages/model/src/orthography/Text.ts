import { ITypeMarked } from "../core/interfaces/ITypeMarked";
import { StringableEntity } from "../core/StringableEntity";
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
