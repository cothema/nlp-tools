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
exports.CsSyllableTokenizer = void 0;
var Token_1 = require("../../../../@core/src/model/Token");
var StringableTokenizer_1 = require("../../../../@core/src/tokenizers/StringableTokenizer");
var Syllable_1 = require("../../../../@model/src/phonetics/Syllable");
var CsDiphthongList_1 = require("../lists/CsDiphthongList");
var CsVowelList_1 = require("../lists/CsVowelList");
var CsSimplePhoneTokenizer_1 = require("./CsSimplePhoneTokenizer");
var CsSyllableTokenizer = /** @class */ (function (_super) {
    __extends(CsSyllableTokenizer, _super);
    function CsSyllableTokenizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CsSyllableTokenizer.prototype.tokenize = function (input) {
        this.clearBuffer();
        this.inputStrAsArray = Array.from(input.toString());
        var phoneTokens = new CsSimplePhoneTokenizer_1.CsSimplePhoneTokenizer().tokenize(input);
        for (var i = 0; phoneTokens[i]; i++) {
            this.newSyllableBuffer.push(phoneTokens[i]);
            if (!phoneTokens[i + 1]) {
                // Solve last phone
                this.pushNewSyllable();
            }
            if (this.isVowel(phoneTokens[i])) {
                // Is vowel
                if ((phoneTokens[i + 1] &&
                    phoneTokens[i + 2] &&
                    !this.isVowel(phoneTokens[i + 1]) &&
                    this.isVowel(phoneTokens[i + 2])) ||
                    (phoneTokens[i + 1] && this.isVowel(phoneTokens[i + 1])) ||
                    (phoneTokens[i + 1] &&
                        phoneTokens[i + 2] &&
                        !this.isVowel(phoneTokens[i + 1]) &&
                        this.isVowel(phoneTokens[i + 2])) ||
                    (phoneTokens[i + 1] &&
                        phoneTokens[i + 2] &&
                        !phoneTokens[i + 3] &&
                        !this.isVowel(phoneTokens[i + 1]) &&
                        this.isVowel(phoneTokens[i + 2]))) {
                    this.pushNewSyllable();
                    continue;
                }
                this.vowelCounter++;
            }
            else {
                // Is consonant
                if ((this.vowelCounter && phoneTokens[i + 2]) || // TODO: regexp: if no vowel till the end, no cut
                    (phoneTokens[i + 1] &&
                        phoneTokens[i + 2] &&
                        this.vowelCounter &&
                        !this.isVowel(phoneTokens[i + 1]) &&
                        this.isVowel(phoneTokens[i + 2])) ||
                    (phoneTokens[i + 1] &&
                        phoneTokens[i + 2] &&
                        phoneTokens[i + 3] &&
                        !phoneTokens[i + 4] &&
                        !this.isVowel(phoneTokens[i + 1]) &&
                        this.isVowel(phoneTokens[i + 2]) &&
                        !this.isVowel(phoneTokens[i + 3])) ||
                    (phoneTokens[i + 1] &&
                        phoneTokens[i + 2] &&
                        !phoneTokens[i + 3] &&
                        !this.isVowel(phoneTokens[i + 1]) &&
                        this.isVowel(phoneTokens[i + 2]))) {
                    this.pushNewSyllable();
                    continue;
                }
                this.consonantCounter++;
            }
        }
        return this.syllablesBuffer;
    };
    CsSyllableTokenizer.prototype.clearBuffer = function () {
        this.newSyllableBuffer = [];
        this.syllablesBuffer = [];
        this.vowelCounter = 0;
        this.consonantCounter = 0;
    };
    CsSyllableTokenizer.prototype.isVowel = function (phoneToken) {
        return CsVowelList_1.CsVowelList.list
            .concat(CsDiphthongList_1.CsDiphthongList.list)
            .includes(phoneToken.fragment.toString());
    };
    /**
     * Check origin length as diff between end and start (it solves spaces and
     * extra chars between).
     */
    CsSyllableTokenizer.prototype.solveOrigLength = function (entityArray) {
        var firstEntity = entityArray[0];
        var lastEntity = entityArray[entityArray.length - 1];
        return lastEntity.origIndex + lastEntity.origLength - firstEntity.origIndex;
    };
    CsSyllableTokenizer.prototype.pushNewSyllable = function () {
        if (this.newSyllableBuffer.length) {
            this.syllablesBuffer.push(new Token_1.Token({
                fragment: new Syllable_1.Syllable({
                    string: this.newSyllableBuffer
                        .map(function (x) { return x.fragment.toString(); })
                        .join(""),
                }),
                origIndex: this.newSyllableBuffer[0].origIndex,
                origLength: this.solveOrigLength(this.newSyllableBuffer),
                orig: this.inputStrAsArray,
            }));
        }
        this.newSyllableBuffer = [];
        this.vowelCounter = 0;
        this.consonantCounter = 0;
    };
    return CsSyllableTokenizer;
}(StringableTokenizer_1.StringableTokenizer));
exports.CsSyllableTokenizer = CsSyllableTokenizer;
//# sourceMappingURL=CsSyllableTokenizer.js.map