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
exports.LetterTokenizer = void 0;
var Token_1 = require("../../../../@core/src/model/Token");
var StringableTokenizer_1 = require("../../../../@core/src/tokenizers/StringableTokenizer");
var DigraphHelper_1 = require("../helpers/DigraphHelper");
var Letter_1 = require("../../../../@model/src/orthography/Letter");
var LetterValidator_1 = require("../validators/LetterValidator");
var CharTokenizer_1 = require("./CharTokenizer");
/**
 * Includes only letters from alphabet (no spaces, special chars, punctuation etc.)
 */
var LetterTokenizer = /** @class */ (function (_super) {
    __extends(LetterTokenizer, _super);
    function LetterTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validator = new LetterValidator_1.LetterValidator();
        _this.digraphs = [];
        return _this;
    }
    LetterTokenizer.prototype.tokenize = function (input) {
        var letterTokens = [];
        var charTokens = new CharTokenizer_1.CharTokenizer().tokenize(input);
        for (var i = 0, tokenIndex = 0; charTokens[i]; i++, tokenIndex++) {
            // Check each char
            if (!this.validator.validate(charTokens[i].fragment)) {
                // Ignore invalid chars (spaces, special chars, punctuation etc.)
                continue;
            }
            var digraph = DigraphHelper_1.DigraphHelper.identifyDigraph(this.digraphs, charTokens.map(function (x) { return x.fragment; }), i);
            if (digraph) {
                // It is digraph
                i += digraph.toString().length - 1; // Skip digraph letters
                letterTokens.push(new Token_1.Token({
                    origIndex: tokenIndex,
                    origLength: digraph.toString().length,
                    fragment: digraph,
                }));
                tokenIndex += digraph.toString().length - 1;
            }
            else {
                // Add single letter (already validated)
                letterTokens.push(new Token_1.Token({
                    origIndex: tokenIndex,
                    origLength: 1,
                    fragment: new Letter_1.Letter({ string: charTokens[i].fragment.toString() }),
                }));
            }
        }
        return letterTokens;
    };
    return LetterTokenizer;
}(StringableTokenizer_1.StringableTokenizer));
exports.LetterTokenizer = LetterTokenizer;
//# sourceMappingURL=LetterTokenizer.js.map