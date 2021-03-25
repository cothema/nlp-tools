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
exports.CsSimplePhoneTokenizer = void 0;
var Token_1 = require("../../../../@core/src/model/Token");
var StringableTokenizer_1 = require("../../../../@core/src/tokenizers/StringableTokenizer");
var RuleBookTools_1 = require("../../../../@core/src/tools/RuleBookTools");
var Digraph_1 = require("../../../../@model/src/orthography/Digraph");
var Meta_1 = require("../../../../@model/src/orthography/Meta");
var Phone_1 = require("../../../../@model/src/orthography/Phone");
var Voice_1 = require("../../../../@model/src/orthography/Voice");
var CsLetterTokenizer_1 = require("../../orthography/tokenizers/CsLetterTokenizer");
var CsPairConsonantsDictionary_1 = require("../dictionaries/CsPairConsonantsDictionary");
var CsDiphthongList_1 = require("../lists/CsDiphthongList");
var CsPairConsonantList_1 = require("../lists/CsPairConsonantList");
var CsPhoneRules_1 = require("../rules/CsPhoneRules");
var CsPhoneTools_1 = require("../rules/CsPhoneTools");
var CsSimplePhoneTokenizer = /** @class */ (function (_super) {
    __extends(CsSimplePhoneTokenizer, _super);
    function CsSimplePhoneTokenizer() {
        var _this = _super.call(this) || this;
        _this.letterTokenizer = new CsLetterTokenizer_1.CsLetterTokenizer();
        _this.letterTokenizer.digraphs = _this.letterTokenizer.digraphs.concat(CsDiphthongList_1.CsDiphthongList.list.map(function (x) { return new Digraph_1.Digraph({ string: x }); }));
        return _this;
    }
    CsSimplePhoneTokenizer.prototype.tokenize = function (input) {
        return this.tokenizeToMeta(input).entity.phones;
    };
    /**
     * CZ: Spodoba znělosti
     *
     * @see https://prirucka.ujc.cas.cz/?id=909
     * @see https://www.diktatorek.cz/Scholasticus/Cesky-jazyk/Pravopis/Pravopis-skupin-souhlasek/Pravopis-souhlasek-uvnitr-slov-help.html
     */
    CsSimplePhoneTokenizer.prototype.solveVoice = function (phoneTokensIn) {
        var meta = new Meta_1.Meta();
        meta.entity = new Voice_1.Voice();
        meta.entity.phones = [];
        for (var i = 0; phoneTokensIn[i]; i++) {
            meta.entity.phones.push(phoneTokensIn[i]);
        }
        var phoneTokens = meta.entity.phones;
        // TODO: voiceless prepositions
        var dictionary = new CsPairConsonantsDictionary_1.CsPairConsonantsDictionary();
        for (var i = 0; phoneTokens[i]; i++) {
            switch (phoneTokens[i].fragment.string) {
                case "w":
                    phoneTokens[i].fragment.string = "v";
                    continue;
                case "x":
                    phoneTokens[i].fragment.string = "ks";
                    continue;
                case "y":
                    phoneTokens[i].fragment.string = "i";
                    continue;
                case "ý":
                    phoneTokens[i].fragment.string = "í";
                    continue;
                case "ů":
                    phoneTokens[i].fragment.string = "ú";
                    continue;
            }
            if (phoneTokens[i] && !phoneTokens[i + 1]) {
                // Last phone
                /**
                 * Hotfix: My rule
                 */
                if (CsPhoneTools_1.CsPhoneTools.isPairConsonant(phoneTokens[i]) &&
                    CsPhoneTools_1.CsPhoneTools.isVoicedConsonant(phoneTokens[i])) {
                    // [voiceless][voiced] => [voiced][voiced]
                    phoneTokens[i].fragment.string = dictionary.translateElement(phoneTokens[i].fragment.toString());
                }
                break;
            }
            else if (!CsPhoneTools_1.CsPhoneTools.isPairConsonant(phoneTokens[i]) ||
                ["p", "t", "ť", "ch", "f", "š"].includes(phoneTokens[i].fragment.toString()) || // Hotfix (c,č): My rule
                !CsPairConsonantList_1.CsPairConsonantList.list
                    .concat(["c", "č"])
                    .includes(phoneTokens[i + 1].fragment.toString()) // Hotfix (c,č): My rule
            ) {
            }
            else if (
            // ["v", "z"].includes(phones[i].toString())
            CsPhoneTools_1.CsPhoneTools.isVoicedConsonant(phoneTokens[i]) &&
                CsPhoneTools_1.CsPhoneTools.isVoicelessConsonant(phoneTokens[i + 1])) {
                // [voiced][voiceless] => [voiceless][voiceless]
                phoneTokens[i].fragment.string = dictionary.translateElement(phoneTokens[i].fragment.toString());
                i++; // skip next phone
            }
            else if (
            // ["f", "s"].includes(phones[i].toString())
            CsPhoneTools_1.CsPhoneTools.isVoicelessConsonant(phoneTokens[i]) &&
                CsPhoneTools_1.CsPhoneTools.isVoicedConsonant(phoneTokens[i + 1])) {
                // [voiceless][voiced] => [voiced][voiced]
                // e.g. pro-sb-a
                phoneTokens[i].fragment.string = dictionary.translateElementReverse(phoneTokens[i].fragment.toString());
                i++; // skip next phone
            }
            var ruleOut = RuleBookTools_1.RuleBookTools.applyRuleById(CsPhoneRules_1.CsPhoneRules, meta, 1, i);
            if (ruleOut.cluster > 0) {
                i += ruleOut.cluster - 1;
                continue;
            }
            ruleOut = RuleBookTools_1.RuleBookTools.applyRuleById(CsPhoneRules_1.CsPhoneRules, meta, 2, i);
            if (ruleOut.cluster > 0) {
                i += ruleOut.cluster - 1;
                continue;
            }
        }
        meta.entity.phones = phoneTokens;
        return meta;
    };
    CsSimplePhoneTokenizer.prototype.tokenizeToMeta = function (input) {
        // TODO: split word to parts (prefix, root...) first
        // TODO: modifiable token
        var _a, _b;
        var letterTokens = this.letterTokenizer.tokenize(input);
        var phoneTokens = [];
        for (var i = 0; letterTokens[i]; i++) {
            var letterStr = letterTokens[i].fragment.toString().toLowerCase();
            var nextLetterStr = (_a = letterTokens[i + 1]) === null || _a === void 0 ? void 0 : _a.fragment.toString().toLowerCase();
            var prevLetterStr = (_b = letterTokens[i - 1]) === null || _b === void 0 ? void 0 : _b.fragment.toString().toLowerCase();
            if (letterStr === "ě") {
                if (prevLetterStr === "d") {
                    phoneTokens[phoneTokens.length - 1].fragment.string = "ď";
                }
                else if (prevLetterStr === "t") {
                    phoneTokens[phoneTokens.length - 1].fragment.string = "ť";
                }
                else if (prevLetterStr === "n") {
                    phoneTokens[phoneTokens.length - 1].fragment.string = "ň";
                }
                else {
                    phoneTokens.push(new Token_1.Token({
                        origIndex: letterTokens[i].origIndex,
                        origLength: 1,
                        fragment: new Phone_1.Phone({
                            string: "j",
                        }),
                        orig: letterTokens,
                    }));
                }
                phoneTokens.push(new Token_1.Token({
                    origIndex: letterTokens[i].origIndex,
                    origLength: 1,
                    fragment: new Phone_1.Phone({
                        string: "e",
                    }),
                    orig: letterTokens,
                }));
            }
            else if (nextLetterStr && letterStr === "s" && nextLetterStr === "h") {
                var length_1 = 2;
                phoneTokens.push(new Token_1.Token({
                    origIndex: letterTokens[i].origIndex,
                    origLength: length_1,
                    fragment: new Phone_1.Phone({
                        string: "š",
                    }),
                    orig: letterTokens,
                }));
                i += length_1 - 1; // skip next letter
            }
            else if (nextLetterStr && letterStr === "t" && nextLetterStr === "h") {
                var length_2 = 2;
                phoneTokens.push(new Token_1.Token({
                    origIndex: letterTokens[i].origIndex,
                    origLength: length_2,
                    fragment: new Phone_1.Phone({
                        string: "t",
                    }),
                    orig: letterTokens,
                }));
                i += length_2 - 1; // skip next letter
            }
            else if (letterStr === " ") {
                // do nothing
            }
            else {
                phoneTokens.push(new Token_1.Token({
                    origIndex: letterTokens[i].origIndex,
                    origLength: Array.from(letterStr).length,
                    fragment: new Phone_1.Phone({
                        string: letterStr,
                    }),
                    orig: letterTokens,
                }));
            }
        }
        return this.solveVoice(phoneTokens);
    };
    return CsSimplePhoneTokenizer;
}(StringableTokenizer_1.StringableTokenizer));
exports.CsSimplePhoneTokenizer = CsSimplePhoneTokenizer;
//# sourceMappingURL=CsSimplePhoneTokenizer.js.map