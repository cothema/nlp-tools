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
exports.RegExpTokenizer = void 0;
var Token_1 = require("../model/Token");
var StringableTokenizer_1 = require("./StringableTokenizer");
var RegExpTokenizer = /** @class */ (function (_super) {
    __extends(RegExpTokenizer, _super);
    function RegExpTokenizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegExpTokenizer.prototype.tokenize = function (input) {
        var outputs = [];
        var match;
        while ((match = this.validator.regExp.exec(input.toString()))) {
            outputs.push(new Token_1.Token({
                origIndex: match.index,
                origLength: match[0].length,
                fragment: this.entityFactory({
                    string: match[0],
                }),
            }));
        }
        if (this.filter) {
            outputs = outputs.filter(this.filter);
        }
        return outputs;
    };
    return RegExpTokenizer;
}(StringableTokenizer_1.StringableTokenizer));
exports.RegExpTokenizer = RegExpTokenizer;
//# sourceMappingURL=RegExpTokenizer.js.map