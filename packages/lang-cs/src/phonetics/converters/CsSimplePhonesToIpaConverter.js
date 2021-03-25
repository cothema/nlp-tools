"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsSimplePhonesToIpaConverter = void 0;
var Dictionary_1 = require("../../../../@core/src/tools/Dictionary");
var PhoneIpa_1 = require("../../../../@model/src/orthography/PhoneIpa");
/**
 * Convert phones to IPA transcription
 */
var CsSimplePhonesToIpaConverter = /** @class */ (function () {
    function CsSimplePhonesToIpaConverter() {
        /**
         * @see https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%A1_abeceda
         */
        this.dictionary = new Dictionary_1.Dictionary({
            á: ["aː"],
            c: ["ts"],
            č: ["tʃ"],
            ď: ["ɟ"],
            e: ["ɛ"],
            é: ["ɛː"],
            h: ["ɦ"],
            ch: ["x"],
            i: ["ɪ"],
            í: ["iː"],
            ň: ["ɲ"],
            ó: ["oː"],
            ř: ["r̝"],
            š: ["ʃ"],
            ť: ["c"],
            ú: ["uː"],
            x: ["ks"],
            y: ["ɪ"],
            ž: ["ʒ"],
        });
    }
    CsSimplePhonesToIpaConverter.prototype.convert = function (phones) {
        var phonesIpa = [];
        for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
            var phone = phones_1[_i];
            var phonesIpaString = this.dictionary.translateElement(phone.toString());
            // TODO: IPA validator
            phonesIpaString !== null && phonesIpaString !== void 0 ? phonesIpaString : (phonesIpaString = [phone.toString()]);
            for (var _a = 0, phonesIpaString_1 = phonesIpaString; _a < phonesIpaString_1.length; _a++) {
                var newPhoneIpa = phonesIpaString_1[_a];
                phonesIpa.push(new PhoneIpa_1.PhoneIpa({ string: newPhoneIpa }));
            }
        }
        return phonesIpa;
    };
    return CsSimplePhonesToIpaConverter;
}());
exports.CsSimplePhonesToIpaConverter = CsSimplePhonesToIpaConverter;
//# sourceMappingURL=CsSimplePhonesToIpaConverter.js.map