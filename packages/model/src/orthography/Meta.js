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
exports.Meta = void 0;
var TokenizableStringableEntity_1 = require("../../../@core/src/model/TokenizableStringableEntity");
/**
 * Meta object
 */
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta(init) {
        var _this = _super.call(this) || this;
        _this.type = "meta";
        _this.rulesApplied = [];
        Object.assign(_this, init);
        return _this;
    }
    return Meta;
}(TokenizableStringableEntity_1.TokenizableStringableEntity));
exports.Meta = Meta;
//# sourceMappingURL=Meta.js.map