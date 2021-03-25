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
exports.EmailAddressValidator = void 0;
var RegExpValidator_1 = require("../../../../@core/src/tokenizers/RegExpValidator");
var EmailAddressValidator = /** @class */ (function (_super) {
    __extends(EmailAddressValidator, _super);
    function EmailAddressValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // https://stackoverflow.com/questions/15140955/use-javascript-to-find-email-address-in-a-string
        _this.regExp = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
        return _this;
    }
    return EmailAddressValidator;
}(RegExpValidator_1.RegExpValidator));
exports.EmailAddressValidator = EmailAddressValidator;
//# sourceMappingURL=EmailAddressValidator.js.map