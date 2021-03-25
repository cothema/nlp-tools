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
exports.EmailAddressTokenizer = void 0;
var RegExpTokenizer_1 = require("../../../../@core/src/tokenizers/RegExpTokenizer");
var EmailAddress_1 = require("../../../../@model/src/semantics/EmailAddress");
var EmailAddressValidator_1 = require("../validators/EmailAddressValidator");
var EmailAddressTokenizer = /** @class */ (function (_super) {
    __extends(EmailAddressTokenizer, _super);
    function EmailAddressTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validator = new EmailAddressValidator_1.EmailAddressValidator();
        _this.entityFactory = function (a) { return new EmailAddress_1.EmailAddress(a); };
        return _this;
    }
    return EmailAddressTokenizer;
}(RegExpTokenizer_1.RegExpTokenizer));
exports.EmailAddressTokenizer = EmailAddressTokenizer;
//# sourceMappingURL=EmailAddressTokenizer.js.map