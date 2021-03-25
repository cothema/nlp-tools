"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringableTokenizer = void 0;
var TokenizableStringableEntity_1 = require("../model/TokenizableStringableEntity");
var StringableTokenizer = /** @class */ (function () {
    function StringableTokenizer() {
        this.entityFactory = function (a) { return new TokenizableStringableEntity_1.TokenizableStringableEntity(a); };
    }
    StringableTokenizer.prototype.tokenizeToEntities = function (input) {
        return this.tokenize(input).map(function (x) { return x.fragment; });
    };
    StringableTokenizer.prototype.tokenizeToOriginalValues = function (input) {
        return this.tokenize(input).map(function (x) {
            return x.orig
                .slice(x.origIndex, x.origIndex + x.origLength)
                .map(function (orig) { return orig.toString(); })
                .join("");
        });
    };
    StringableTokenizer.prototype.tokenizeToValues = function (input) {
        return this.tokenize(input).map(function (x) { return x.fragment.toString(); });
    };
    StringableTokenizer.prototype.tokenizeToValue = function (input) {
        return this.tokenizeToValues(input).join("");
    };
    return StringableTokenizer;
}());
exports.StringableTokenizer = StringableTokenizer;
//# sourceMappingURL=StringableTokenizer.js.map