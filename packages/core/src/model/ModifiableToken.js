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
exports.ModifiableToken = void 0;
var Token_1 = require("./Token");
var ModifiableToken = /** @class */ (function (_super) {
    __extends(ModifiableToken, _super);
    function ModifiableToken(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    /**
     * It will remove one entity on given index and append new entities instead of
     * it. All entities with higher indexes will be shifted right (including
     * token positions).
     * @param index
     * @param newEntities
     */
    ModifiableToken.prototype.modify = function (index, newStr) {
        if (!this.originalEntity) {
            this.originalEntity = this.fragment.clone();
            this.originalIndex = this.origIndex;
            this.originalLength = this.origLength;
        }
        this.origIndex = index;
        this.origLength = newStr.length;
        this.fragment.string = this.strSplice(this.fragment.toString(), index, 1, newStr);
        this.shiftExistingTokens(index, newStr.length);
        return this;
    };
    ModifiableToken.prototype.shiftExistingTokens = function (index, newStrLength) {
        var existingTokens = this.fragment.tokenInfoList;
        for (var _i = 0, existingTokens_1 = existingTokens; _i < existingTokens_1.length; _i++) {
            var existingToken = existingTokens_1[_i];
            if (existingToken.origIndex === index) {
                existingToken.origLength += newStrLength - 1;
            }
            else if (existingToken.origIndex > index) {
                existingToken.origIndex += newStrLength - 1;
            }
        }
    };
    ModifiableToken.prototype.strSplice = function (str, index, count, add) {
        // We cannot pass negative indexes directly to the 2nd slicing operation.
        if (index < 0) {
            index = str.length + index;
            if (index < 0) {
                index = 0;
            }
        }
        return str.slice(0, index) + (add || "") + str.slice(index + count);
    };
    return ModifiableToken;
}(Token_1.Token));
exports.ModifiableToken = ModifiableToken;
//# sourceMappingURL=ModifiableToken.js.map