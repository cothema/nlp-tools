"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsCharsToSimplePhonesConverter = void 0;
var Dictionary_1 = require("../../../../@core/src/tools/Dictionary");
var Phone_1 = require("../../../../@model/src/orthography/Phone");
/**
 * See: https://www.pravopisne.cz/2012/01/pravidla-samohlasky-a-souhlasky/#jak-je-to-s-u,-e,-y/y?
 */
var CsCharsToSimplePhonesConverter = /** @class */ (function () {
    function CsCharsToSimplePhonesConverter() {
        this.dictionary = new Dictionary_1.Dictionary({
            ů: ["ú"],
            ě: ["j", "e"],
            y: ["i"],
            ý: ["í"],
        });
    }
    CsCharsToSimplePhonesConverter.prototype.convert = function (chars) {
        var phones = [];
        for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
            var char = chars_1[_i];
            var newPhones = this.dictionary.translateElement(char.toString().toLowerCase());
            for (var _a = 0, newPhones_1 = newPhones; _a < newPhones_1.length; _a++) {
                var newPhone = newPhones_1[_a];
                phones.push(new Phone_1.Phone({ string: newPhone }));
            }
        }
        return phones;
    };
    return CsCharsToSimplePhonesConverter;
}());
exports.CsCharsToSimplePhonesConverter = CsCharsToSimplePhonesConverter;
//# sourceMappingURL=CsCharsToSimplePhonesConverter.js.map