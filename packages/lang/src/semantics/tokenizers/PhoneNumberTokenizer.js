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
exports.PhoneNumberTokenizer = void 0;
var RegExpTokenizer_1 = require("../../../../@core/src/tokenizers/RegExpTokenizer");
var PhoneNumber_1 = require("../../../../@model/src/semantics/PhoneNumber");
var PhoneNumberValidator_1 = require("../validators/PhoneNumberValidator");
var PhoneNumberTokenizer = /** @class */ (function (_super) {
    __extends(PhoneNumberTokenizer, _super);
    function PhoneNumberTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validator = new PhoneNumberValidator_1.PhoneNumberValidator();
        _this.entityFactory = function (a) { return new PhoneNumber_1.PhoneNumber(a); };
        return _this;
    }
    return PhoneNumberTokenizer;
}(RegExpTokenizer_1.RegExpTokenizer));
exports.PhoneNumberTokenizer = PhoneNumberTokenizer;
//# sourceMappingURL=PhoneNumberTokenizer.js.map