"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterValidator = void 0;
var LetterList_1 = require("../lists/LetterList");
var LetterValidator = /** @class */ (function () {
    function LetterValidator() {
    }
    LetterValidator.prototype.validate = function (letterCandidate) {
        return !!LetterList_1.LetterList.list.find(function (x) { return x === letterCandidate.toString().toLowerCase(); });
    };
    return LetterValidator;
}());
exports.LetterValidator = LetterValidator;
//# sourceMappingURL=LetterValidator.js.map