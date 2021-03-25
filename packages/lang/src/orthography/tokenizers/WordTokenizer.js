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
exports.WordTokenizer = void 0;
var SplitRegExpTokenizer_1 = require("../../../../@core/src/tokenizers/SplitRegExpTokenizer");
var WordTokenizer = /** @class */ (function (_super) {
    __extends(WordTokenizer, _super);
    function WordTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitRegExp = /[\s\?!"'<>,\.…]+/g;
        return _this;
    }
    return WordTokenizer;
}(SplitRegExpTokenizer_1.SplitRegExpTokenizer));
exports.WordTokenizer = WordTokenizer;
//# sourceMappingURL=WordTokenizer.js.map