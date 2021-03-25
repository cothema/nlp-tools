"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsPhoneTools = void 0;
var CsPairConsonantList_1 = require("../lists/CsPairConsonantList");
var CsVoicedConsonantList_1 = require("../lists/CsVoicedConsonantList");
var CsVoicelessConsonantList_1 = require("../lists/CsVoicelessConsonantList");
var CsPhoneTools = /** @class */ (function () {
    function CsPhoneTools() {
    }
    CsPhoneTools.isPairConsonant = function (phoneToken) {
        return CsPairConsonantList_1.CsPairConsonantList.list.includes(phoneToken.fragment.toString());
    };
    CsPhoneTools.isVoicedConsonant = function (phoneToken) {
        return CsVoicedConsonantList_1.CsVoicedConsonantList.list.includes(phoneToken.fragment.toString());
    };
    CsPhoneTools.isVoicelessConsonant = function (phoneToken) {
        return CsVoicelessConsonantList_1.CsVoicelessConsonantList.list.includes(phoneToken.fragment.toString());
    };
    return CsPhoneTools;
}());
exports.CsPhoneTools = CsPhoneTools;
//# sourceMappingURL=CsPhoneTools.js.map