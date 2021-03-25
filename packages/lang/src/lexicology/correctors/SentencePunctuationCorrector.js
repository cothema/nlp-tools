"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentencePunctuationCorrector = void 0;
var ModifiableToken_1 = require("../../../../@core/src/model/ModifiableToken");
var LexicologyErrorType_1 = require("../enums/LexicologyErrorType");
var AbstractLexicologyCorrector_1 = require("./AbstractLexicologyCorrector");
var SentencePunctuationCorrector = /** @class */ (function (_super) {
    __extends(SentencePunctuationCorrector, _super);
    function SentencePunctuationCorrector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SentencePunctuationCorrector.prototype.fixAll = function () {
        // Fix extra space
        this.fixLeftExtraWhitespace()
            .fixRightExtraWhitespace()
            .fixMultipleWhitespace()
            .fixWhitespaceBeforeEndPunctuation();
        // Fix punctuation
        this.fixInvalidEndPunctuation().fixMissingEndPunctuation();
        // Fix letters
        this.fixFirstLetterUpper();
        return this;
    };
    SentencePunctuationCorrector.prototype.fixLeftExtraWhitespace = function () {
        var matchRegExp = /^\s+/g;
        return this.fixByRegExp(matchRegExp, "", LexicologyErrorType_1.LexicologyErrorType.EXTRA_WHITESPACE);
    };
    SentencePunctuationCorrector.prototype.fixRightExtraWhitespace = function () {
        var matchRegExp = /\s+$/g;
        return this.fixByRegExp(matchRegExp, "", LexicologyErrorType_1.LexicologyErrorType.EXTRA_WHITESPACE);
    };
    SentencePunctuationCorrector.prototype.fixMultipleWhitespace = function () {
        var matchRegExp = /[ ]+$/g;
        return this.fixByRegExp(matchRegExp, " ", LexicologyErrorType_1.LexicologyErrorType.EXTRA_WHITESPACE);
    };
    SentencePunctuationCorrector.prototype.fixWhitespaceBeforeEndPunctuation = function () {
        var matchRegExp = /[ ]+(?=[\.\?!…])/g;
        return this.fixByRegExp(matchRegExp, "", LexicologyErrorType_1.LexicologyErrorType.EXTRA_WHITESPACE);
    };
    SentencePunctuationCorrector.prototype.fixInvalidEndPunctuation = function () {
        var matchRegExps = [
            { regExp: /\.{2,}$/g, replace: "…" },
            { regExp: /\?{2,}$/g, replace: "?" },
            { regExp: /!{2,}$/g, replace: "!" },
        ];
        return this.fixByMultipleRegExps(matchRegExps, LexicologyErrorType_1.LexicologyErrorType.END_PUNCTUATION_INVALID);
    };
    SentencePunctuationCorrector.prototype.fixFirstLetterUpper = function () {
        var str = this.entity.toString().charAt(0).toUpperCase() +
            this.entity.toString().slice(1);
        var tokenInfo;
        if (this.provideTokenInfo) {
            tokenInfo = new ModifiableToken_1.ModifiableToken({
                originalLength: 1,
                originalIndex: 0,
                origIndex: 0,
                origLength: 1,
            });
        }
        return this.fixInOriginal(str, LexicologyErrorType_1.LexicologyErrorType.FIRST_LETTER_NOT_UPPER, tokenInfo);
    };
    SentencePunctuationCorrector.prototype.fixMissingEndPunctuation = function () {
        var str = this.entity.toString();
        var tokenInfo;
        if (![".", "?", "!", "…"].includes(str.charAt(str.length - 1))) {
            str += ".";
            if (this.provideTokenInfo) {
                tokenInfo = new ModifiableToken_1.ModifiableToken({
                    originalLength: 0,
                    originalIndex: str.length - 1,
                    origIndex: str.length - 1,
                    origLength: 1,
                });
            }
        }
        return this.fixInOriginal(str, LexicologyErrorType_1.LexicologyErrorType.END_PUNCTUATION_MISSING, tokenInfo);
    };
    return SentencePunctuationCorrector;
}(AbstractLexicologyCorrector_1.AbstractLexicologyCorrector));
exports.SentencePunctuationCorrector = SentencePunctuationCorrector;
//# sourceMappingURL=SentencePunctuationCorrector.js.map