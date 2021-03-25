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
exports.CsAddDiacriticsAcuteAccentDictionary = void 0;
var Dictionary_1 = require("../../../../@core/src/tools/Dictionary");
var CsAddDiacriticsAcuteAccentDictionary = /** @class */ (function (_super) {
    __extends(CsAddDiacriticsAcuteAccentDictionary, _super);
    function CsAddDiacriticsAcuteAccentDictionary() {
        return _super.call(this, {
            a: "á",
            e: "é",
            i: "í",
            o: "ó",
            u: "ú",
            y: "ý",
        }) || this;
    }
    return CsAddDiacriticsAcuteAccentDictionary;
}(Dictionary_1.Dictionary));
exports.CsAddDiacriticsAcuteAccentDictionary = CsAddDiacriticsAcuteAccentDictionary;
//# sourceMappingURL=CsAddDiacriticsAcuteAccentDictionary.js.map