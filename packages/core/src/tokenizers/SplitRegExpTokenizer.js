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
exports.SplitRegExpTokenizer = void 0;
var Token_1 = require("../model/Token");
var StringableTokenizer_1 = require("./StringableTokenizer");
var SplitRegExpTokenizer = /** @class */ (function (_super) {
    __extends(SplitRegExpTokenizer, _super);
    function SplitRegExpTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitRegExp = /\.+/g;
        return _this;
    }
    SplitRegExpTokenizer.prototype.tokenize = function (input) {
        var outputs = [];
        var match;
        var pointer = 0;
        while ((match = this.splitRegExp.exec(input.toString()))) {
            var positiveStringLength = match.index - pointer;
            var oldPointer = pointer;
            pointer += positiveStringLength + match[0].length;
            if (positiveStringLength <= 0) {
                continue;
            }
            var fragmentString = input
                .toString()
                .slice(oldPointer, oldPointer + positiveStringLength);
            outputs.push(new Token_1.Token({
                origIndex: oldPointer,
                origLength: positiveStringLength,
                fragment: this.entityFactory({
                    string: fragmentString,
                }),
            }));
        }
        // append last word if no delimiter is at the end.
        if (pointer < input.toString().length) {
            var fragmentString = input
                .toString()
                .slice(pointer, input.toString().length);
            var positiveStringLength = input.toString().length - pointer;
            outputs.push(new Token_1.Token({
                origIndex: pointer,
                origLength: positiveStringLength,
                fragment: this.entityFactory({
                    string: fragmentString,
                }),
            }));
        }
        return outputs;
    };
    return SplitRegExpTokenizer;
}(StringableTokenizer_1.StringableTokenizer));
exports.SplitRegExpTokenizer = SplitRegExpTokenizer;
//# sourceMappingURL=SplitRegExpTokenizer.js.map