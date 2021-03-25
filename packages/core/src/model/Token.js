"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
var Token = /** @class */ (function () {
    function Token(init) {
        Object.assign(this, init);
    }
    Token.prototype.toString = function () {
        return this === null || this === void 0 ? void 0 : this.fragment.toString();
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=Token.js.map