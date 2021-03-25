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
exports.UrlValidator = void 0;
var RegExpValidator_1 = require("../../../../@core/src/tokenizers/RegExpValidator");
var UrlValidator = /** @class */ (function (_super) {
    __extends(UrlValidator, _super);
    function UrlValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // https://stackoverflow.com/a/3809435/1044198
        _this.regExp = /((http:\/\/)|(https:\/\/))?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
        return _this;
    }
    return UrlValidator;
}(RegExpValidator_1.RegExpValidator));
exports.UrlValidator = UrlValidator;
//# sourceMappingURL=UrlValidator.js.map