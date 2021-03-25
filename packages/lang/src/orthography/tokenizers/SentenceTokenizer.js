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
exports.SentenceTokenizer = void 0;
var RegExpTokenizer_1 = require("../../../../@core/src/tokenizers/RegExpTokenizer");
var Sentence_1 = require("../../../../@model/src/orthography/Sentence");
var SentenceValidator_1 = require("../validators/SentenceValidator");
var SentenceTokenizer = /** @class */ (function (_super) {
    __extends(SentenceTokenizer, _super);
    function SentenceTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validator = new SentenceValidator_1.SentenceValidator();
        _this.entityFactory = function (a) { return new Sentence_1.Sentence(a); };
        return _this;
    }
    return SentenceTokenizer;
}(RegExpTokenizer_1.RegExpTokenizer));
exports.SentenceTokenizer = SentenceTokenizer;
//# sourceMappingURL=SentenceTokenizer.js.map