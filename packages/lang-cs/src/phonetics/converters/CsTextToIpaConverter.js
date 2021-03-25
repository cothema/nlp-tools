"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsTextToIpaConverter = void 0;
var CsSimplePhoneTokenizer_1 = require("../tokenizers/CsSimplePhoneTokenizer");
var CsSimplePhonesToIpaConverter_1 = require("./CsSimplePhonesToIpaConverter");
/**
 * Convert text to IPA transcription
 */
var CsTextToIpaConverter = /** @class */ (function () {
    function CsTextToIpaConverter() {
    }
    CsTextToIpaConverter.prototype.convert = function (text) {
        var phoneTokenizer = new CsSimplePhoneTokenizer_1.CsSimplePhoneTokenizer();
        var phoneTokens = phoneTokenizer.tokenize(text);
        var ipaConverter = new CsSimplePhonesToIpaConverter_1.CsSimplePhonesToIpaConverter();
        return ipaConverter.convert(phoneTokens.map(function (token) { return token.fragment; }));
    };
    return CsTextToIpaConverter;
}());
exports.CsTextToIpaConverter = CsTextToIpaConverter;
//# sourceMappingURL=CsTextToIpaConverter.js.map