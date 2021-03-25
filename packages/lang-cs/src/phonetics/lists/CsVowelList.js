"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsVowelList = void 0;
var CsLongSimpleVowelList_1 = require("./CsLongSimpleVowelList");
var CsShortVowelList_1 = require("./CsShortVowelList");
var CsVowelList = /** @class */ (function () {
    function CsVowelList() {
    }
    CsVowelList.list = CsShortVowelList_1.CsShortVowelList.list.concat(CsLongSimpleVowelList_1.CsLongSimpleVowelList.list);
    return CsVowelList;
}());
exports.CsVowelList = CsVowelList;
//# sourceMappingURL=CsVowelList.js.map