"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
var Dictionary = /** @class */ (function () {
    function Dictionary(dictionary) {
        this.dictionary = dictionary;
    }
    Dictionary.prototype.translateElement = function (input) {
        if (this.dictionary.hasOwnProperty(input)) {
            return this.dictionary[input];
        }
        return undefined;
    };
    Dictionary.prototype.translateElementReverse = function (input) {
        var _this = this;
        return Object.keys(this.dictionary).find(function (x) { return _this.dictionary[x] === input; });
    };
    Dictionary.prototype.translateArray = function (input) {
        var out = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var str = input_1[_i];
            out.push(this.translateElement(str));
        }
        return out;
    };
    Dictionary.prototype.translateArrayReverse = function (input) {
        var out = [];
        for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
            var str = input_2[_i];
            out.push(this.translateElementReverse(str));
        }
        return out;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map