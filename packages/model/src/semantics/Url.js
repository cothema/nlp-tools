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
exports.Url = void 0;
var TokenizableStringableEntity_1 = require("../../../@core/src/model/TokenizableStringableEntity");
var Url = /** @class */ (function (_super) {
    __extends(Url, _super);
    function Url(init) {
        var _this = _super.call(this) || this;
        _this.type = "email-address";
        Object.assign(_this, init);
        return _this;
    }
    return Url;
}(TokenizableStringableEntity_1.TokenizableStringableEntity));
exports.Url = Url;
//# sourceMappingURL=Url.js.map