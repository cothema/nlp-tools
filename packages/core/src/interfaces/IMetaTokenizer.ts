import { Meta } from "@cothema/nlp-model";
import { IStringable } from "@cothema/nlp-model";

export interface IMetaTokenizer<Entity> {
  tokenizeToMeta(input: IStringable): Meta<Entity>;
}
