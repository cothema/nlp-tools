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
exports.Diphthong = void 0;
var TokenizableStringableEntity_1 = require("../../../@core/src/model/TokenizableStringableEntity");
/**
 * e.g. au, ou, eu
 */
var Diphthong = /** @class */ (function (_super) {
    __extends(Diphthong, _super);
    function Diphthong(init) {
        var _this = _super.call(this) || this;
        _this.type = "diphthong";
        Object.assign(_this, init);
        return _this;
    }
    return Diphthong;
}(TokenizableStringableEntity_1.TokenizableStringableEntity));
exports.Diphthong = Diphthong;
//# sourceMappingURL=Diphthong.js.map