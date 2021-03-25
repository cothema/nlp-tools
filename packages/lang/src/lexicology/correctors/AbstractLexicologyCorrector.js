"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLexicologyCorrector = void 0;
var ModifiableToken_1 = require("../../../../@core/src/model/ModifiableToken");
var LexicologyErrorType_1 = require("../enums/LexicologyErrorType");
var LexicologyError_1 = require("../model/LexicologyError");
var AbstractLexicologyCorrector = /** @class */ (function () {
    function AbstractLexicologyCorrector(entity) {
        this.entity = entity;
        this.errors = [];
        this.provideTokenInfo = true;
    }
    AbstractLexicologyCorrector.prototype.getEntity = function () {
        return this.entity;
    };
    AbstractLexicologyCorrector.prototype.fixByMultipleRegExps = function (matchRegExps, lexicologyError) {
        if (lexicologyError === void 0) { lexicologyError = LexicologyErrorType_1.LexicologyErrorType.UNSPECIFIED; }
        for (var _i = 0, matchRegExps_1 = matchRegExps; _i < matchRegExps_1.length; _i++) {
            var matchRegExp = matchRegExps_1[_i];
            this.fixByRegExp(matchRegExp.regExp, matchRegExp.replace || "", lexicologyError);
        }
        return this;
    };
    AbstractLexicologyCorrector.prototype.fixByRegExp = function (matchRegExp, replaceWith, lexicologyError) {
        if (replaceWith === void 0) { replaceWith = ""; }
        if (lexicologyError === void 0) { lexicologyError = LexicologyErrorType_1.LexicologyErrorType.UNSPECIFIED; }
        var str = this.entity
            .toString()
            .replace(matchRegExp, replaceWith);
        var match;
        while ((match = matchRegExp.exec(this.entity.toString()))) {
            var tokenInfo = new ModifiableToken_1.ModifiableToken({
                originalLength: match[0].length,
                originalIndex: match.index,
                origLength: replaceWith.length,
                origIndex: match.index,
            });
            this.fixInOriginal(str, lexicologyError, tokenInfo);
        }
        return this;
    };
    AbstractLexicologyCorrector.prototype.fixInOriginal = function (newString, error, tokenInfo) {
        if (this.entity.toString() !== newString) {
            // There were some corrections.
            this.entity.string = newString;
            var lexicologyError = new LexicologyError_1.LexicologyError({
                type: error,
                fixed: true,
            });
            if (tokenInfo && this.provideTokenInfo) {
                lexicologyError.tokenInfo = tokenInfo;
            }
            this.errors.push(lexicologyError);
        }
        // No changes or this.fixInOriginalString is true
        return this;
    };
    return AbstractLexicologyCorrector;
}());
exports.AbstractLexicologyCorrector = AbstractLexicologyCorrector;
//# sourceMappingURL=AbstractLexicologyCorrector.js.map