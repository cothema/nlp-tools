import { IMetaTokenizer } from "../../../../@core/src/interfaces/IMetaTokenizer";
import { IStringable } from "../../../../@core/src/interfaces/IStringable";
import { IStringableTokenizer } from "../../../../@core/src/interfaces/IStringableTokenizer";
import { Token } from "../../../../@core/src/model/Token";
import { StringableTokenizer } from "../../../../@core/src/tokenizers/StringableTokenizer";
import { Letter } from "../../../../@model/src/orthography/Letter";
import { Meta } from "../../../../@model/src/orthography/Meta";
import { Phone } from "../../../../@model/src/orthography/Phone";
import { Voice } from "../../../../@model/src/orthography/Voice";
export declare class CsSimplePhoneTokenizer extends StringableTokenizer implements IStringableTokenizer<Phone>, IMetaTokenizer<Voice> {
    private letterTokenizer;
    constructor();
    tokenize(input: IStringable): Token<Phone, Letter>[];
    /**
     * CZ: Spodoba znělosti
     *
     * @see https://prirucka.ujc.cas.cz/?id=909
     * @see https://www.diktatorek.cz/Scholasticus/Cesky-jazyk/Pravopis/Pravopis-skupin-souhlasek/Pravopis-souhlasek-uvnitr-slov-help.html
     */
    private solveVoice;
    tokenizeToMeta(input: IStringable): Meta<Voice>;
}
