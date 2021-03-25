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
exports.UrlTokenizer = void 0;
var RegExpTokenizer_1 = require("../../../../@core/src/tokenizers/RegExpTokenizer");
var Url_1 = require("../../../../@model/src/semantics/Url");
var EmailAddressValidator_1 = require("../validators/EmailAddressValidator");
var UrlValidator_1 = require("../validators/UrlValidator");
var UrlTokenizer = /** @class */ (function (_super) {
    __extends(UrlTokenizer, _super);
    function UrlTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validator = new UrlValidator_1.UrlValidator();
        _this.entityFactory = function (a) { return new Url_1.Url(a); };
        _this.filter = function (x) {
            return !new EmailAddressValidator_1.EmailAddressValidator().validate(x.fragment.toString());
        }; // Filter out email addresses
        return _this;
    }
    return UrlTokenizer;
}(RegExpTokenizer_1.RegExpTokenizer));
exports.UrlTokenizer = UrlTokenizer;
//# sourceMappingURL=UrlTokenizer.js.map