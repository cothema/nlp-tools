import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { Token } from "../../../../@core/src/model/Token";
import { RegExpTokenizer } from "../../../../@core/src/tokenizers/RegExpTokenizer";
import { Url } from "../../../../@model/src/semantics/Url";
import { UrlValidator } from "../validators/UrlValidator";
export declare class UrlTokenizer extends RegExpTokenizer<Url> implements IStringableTokenizer<Url> {
    validator: UrlValidator;
    entityFactory: (a: any) => Url;
    filter: (x: Token<Url>) => boolean;
}
