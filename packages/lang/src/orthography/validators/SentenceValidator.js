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
exports.SentenceValidator = void 0;
var RegExpValidator_1 = require("../../../../@core/src/tokenizers/RegExpValidator");
var SentenceValidator = /** @class */ (function (_super) {
    __extends(SentenceValidator, _super);
    function SentenceValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Regular expression is used from NaturalNode/natural library from
         * Github.com: https://github.com/NaturalNode/natural
         * Original license: MIT
         */
        _this.regExp = /(?<=\s+|^)[\"\'\‘\“\'\"\[\(\{\⟨](.*?[.?!])(\s[.?!])*[\"\'\’\”\'\"\]\)\}\⟩](?=\s+|$)|(?<=\s+|^)\S(.*?[.?!])(\s[.?!])*(?=\s+|$)/g;
        return _this;
    }
    return SentenceValidator;
}(RegExpValidator_1.RegExpValidator));
exports.SentenceValidator = SentenceValidator;
//# sourceMappingURL=SentenceValidator.js.map