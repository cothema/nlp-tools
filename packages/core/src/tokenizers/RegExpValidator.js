"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExpValidator = void 0;
var RegExpValidator = /** @class */ (function () {
    function RegExpValidator() {
    }
    RegExpValidator.prototype.validate = function (candidate) {
        var out = false;
        var regExp;
        for (var i = 0; (regExp = this.regExp.exec(candidate.toString())); i++) {
            if (i > 0) {
                out = false;
                continue;
            }
            out =
                regExp &&
                    regExp.index === 0 &&
                    regExp[0].length === candidate.toString().length;
        }
        return out;
    };
    return RegExpValidator;
}());
exports.RegExpValidator = RegExpValidator;
//# sourceMappingURL=RegExpValidator.js.map