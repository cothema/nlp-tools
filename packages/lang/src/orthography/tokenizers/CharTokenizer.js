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
exports.CharTokenizer = void 0;
var Token_1 = require("../../../../@core/src/model/Token");
var RegExpTokenizer_1 = require("../../../../@core/src/tokenizers/RegExpTokenizer");
var Char_1 = require("../../../../@model/src/orthography/Char");
var CharTokenizer = /** @class */ (function (_super) {
    __extends(CharTokenizer, _super);
    function CharTokenizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharTokenizer.prototype.tokenize = function (input) {
        var out = [];
        var chars = Array.from(input.toString());
        for (var i = 0; chars[i]; i++) {
            // char = length = 1 (including utf-8 special chars)
            out.push(new Token_1.Token({
                origIndex: i,
                origLength: 1,
                fragment: new Char_1.Char({ string: chars[i] }),
            }));
        }
        return out;
    };
    return CharTokenizer;
}(RegExpTokenizer_1.RegExpTokenizer));
exports.CharTokenizer = CharTokenizer;
//# sourceMappingURL=CharTokenizer.js.map