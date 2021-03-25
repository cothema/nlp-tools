import { Meta } from "../../../model/src/orthography/Meta";
import { IStringable } from "../../../model/src/core/interfaces/IStringable";

export interface IMetaTokenizer<Entity> {
  tokenizeToMeta(input: IStringable): Meta<Entity>;
}
