import { Token } from "../../../../@core/src/model/Token";
import { Phone } from "../../../../@model/src/orthography/Phone";
export declare class CsPhoneTools {
    static isPairConsonant(phoneToken: Token<Phone>): boolean;
    static isVoicedConsonant(phoneToken: Token<Phone>): boolean;
    static isVoicelessConsonant(phoneToken: Token<Phone>): boolean;
}
