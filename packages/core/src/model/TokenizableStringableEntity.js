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
exports.TokenizableStringableEntity = void 0;
var ModifiableToken_1 = require("./ModifiableToken");
var StringableEntity_1 = require("./StringableEntity");
var TokenizableStringableEntity = /** @class */ (function (_super) {
    __extends(TokenizableStringableEntity, _super);
    function TokenizableStringableEntity(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    /**
     * Be careful, because non trivial datatypes will remain as pointers if
     * they will not be cloned manually!
     */
    TokenizableStringableEntity.prototype.clone = function () {
        var clone = new TokenizableStringableEntity(this);
        clone.tokenInfoList = [];
        for (var _i = 0, _a = this.tokenInfoList; _i < _a.length; _i++) {
            var tokenInfoListElement = _a[_i];
            clone.tokenInfoList.push(new ModifiableToken_1.ModifiableToken({
                origIndex: tokenInfoListElement.origIndex,
                origLength: tokenInfoListElement.origLength,
                fragment: clone,
            }));
        }
        return clone;
    };
    return TokenizableStringableEntity;
}(StringableEntity_1.StringableEntity));
exports.TokenizableStringableEntity = TokenizableStringableEntity;
//# sourceMappingURL=TokenizableStringableEntity.js.map