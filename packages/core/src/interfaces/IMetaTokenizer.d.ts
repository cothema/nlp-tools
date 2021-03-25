import { Meta } from "../../../@model/src/orthography/Meta";
import { IStringable } from "./IStringable";
export interface IMetaTokenizer<Entity> {
    tokenizeToMeta(input: IStringable): Meta<Entity>;
}
