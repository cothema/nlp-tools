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
exports.CsLetterTokenizer = void 0;
var Digraph_1 = require("../../../../@model/src/orthography/Digraph");
var LetterTokenizer_1 = require("../../../../@lang/src/orthography/tokenizers/LetterTokenizer");
/**
 * Includes only letters from alphabet (no spaces, special chars, punctuation etc.)
 */
var CsLetterTokenizer = /** @class */ (function (_super) {
    __extends(CsLetterTokenizer, _super);
    function CsLetterTokenizer() {
        var _this = _super.call(this) || this;
        _this.digraphs = _this.digraphs.concat(["ch"].map(function (x) { return new Digraph_1.Digraph({ string: x }); }));
        return _this;
    }
    return CsLetterTokenizer;
}(LetterTokenizer_1.LetterTokenizer));
exports.CsLetterTokenizer = CsLetterTokenizer;
//# sourceMappingURL=CsLetterTokenizer.js.map