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
exports.PhoneIpa = void 0;
var TokenizableStringableEntity_1 = require("../../../@core/src/model/TokenizableStringableEntity");
/**
 * IPA phone transcription
 * @see https://en.wikipedia.org/wiki/International_Phonetic_Alphabet
 */
var PhoneIpa = /** @class */ (function (_super) {
    __extends(PhoneIpa, _super);
    function PhoneIpa(init) {
        var _this = _super.call(this) || this;
        _this.type = "phone-ipa";
        Object.assign(_this, init);
        return _this;
    }
    return PhoneIpa;
}(TokenizableStringableEntity_1.TokenizableStringableEntity));
exports.PhoneIpa = PhoneIpa;
//# sourceMappingURL=PhoneIpa.js.map