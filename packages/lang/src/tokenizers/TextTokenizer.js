"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTokenizer = void 0;
var Sentence_1 = require("../../../@model/src/orthography/Sentence");
var Word_1 = require("../../../@model/src/orthography/Word");
var SentenceModality_1 = require("../semantics/enums/SentenceModality");
var TextTokenizer = /** @class */ (function () {
    function TextTokenizer() {
    }
    TextTokenizer.getWords = function (input) {
        var str = TextTokenizer.removeInterpunction(input.toString());
        return str
            .split(" ")
            .filter(function (el) { return el.trim().length; })
            .map(function (el) { return new Word_1.Word(el); });
    };
    TextTokenizer.removeInterpunction = function (input) {
        for (var _i = 0, _a = TextTokenizer.interpunction; _i < _a.length; _i++) {
            var interpunctionElement = _a[_i];
            input = input.replace(interpunctionElement, "");
        }
        return input;
    };
    TextTokenizer.getSentences = function (text) {
        var parts = text.string.split(/(\.|\?|\!)/g);
        var out = [];
        for (var i = 0; parts[i] !== undefined; i = i + 2) {
            if (parts[i + 1] === undefined) {
                parts[i + 1] = "";
            }
            out.push(parts[i] + parts[i + 1]);
        }
        return out
            .filter(function (el) {
            return el.length;
        })
            .map(function (el) {
            return new Sentence_1.Sentence(el);
        });
    };
    TextTokenizer.getSentenceType = function (sentence) {
        var end = sentence.string.substr(sentence.string.length - 1);
        switch (end) {
            case ".":
                return SentenceModality_1.SentenceModality.Statement;
            case "?":
                return SentenceModality_1.SentenceModality.Question;
            case "!":
                return SentenceModality_1.SentenceModality.Command;
        }
        return null;
    };
    TextTokenizer.interpunction = [".", ",", "?", "!", ":"];
    return TextTokenizer;
}());
exports.TextTokenizer = TextTokenizer;
//# sourceMappingURL=TextTokenizer.js.map