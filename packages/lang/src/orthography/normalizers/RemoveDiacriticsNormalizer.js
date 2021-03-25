"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveDiacriticsNormalizer = void 0;
var Dictionary_1 = require("../../../../@core/src/tools/Dictionary");
var Char_1 = require("../../../../@model/src/orthography/Char");
var CharTokenizer_1 = require("../tokenizers/CharTokenizer");
var RemoveDiacriticsNormalizer = /** @class */ (function () {
    function RemoveDiacriticsNormalizer() {
        this.dictionary = new Dictionary_1.Dictionary({
            á: "a",
            é: "e",
            í: "i",
            ó: "o",
            ú: "u",
            ý: "y",
            ž: "z",
            š: "s",
            č: "c",
            ř: "r",
            ď: "d",
            ť: "t",
            ň: "n",
            ů: "u",
        });
    }
    RemoveDiacriticsNormalizer.prototype.normalizeString = function (chars) {
        var charsEntities = new CharTokenizer_1.CharTokenizer().tokenizeToEntities(chars);
        return this.normalizeChars(charsEntities)
            .map(function (x) { return x.string; })
            .join("");
    };
    RemoveDiacriticsNormalizer.prototype.normalizeChars = function (chars) {
        var out = [];
        for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
            var char = chars_1[_i];
            var outChar = this.dictionary.translateElement(char.toString().toLowerCase());
            if (outChar === undefined) {
                outChar = char.toString();
            }
            out.push(new Char_1.Char({ string: outChar }));
        }
        return out;
    };
    return RemoveDiacriticsNormalizer;
}());
exports.RemoveDiacriticsNormalizer = RemoveDiacriticsNormalizer;
//# sourceMappingURL=RemoveDiacriticsNormalizer.js.map