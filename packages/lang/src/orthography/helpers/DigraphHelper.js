"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigraphHelper = void 0;
var Digraph_1 = require("../../../../@model/src/orthography/Digraph");
var DigraphHelper = /** @class */ (function () {
    function DigraphHelper() {
    }
    DigraphHelper.identifyDigraph = function (digraphs, chars, i) {
        var digraphStr;
        for (var _i = 0, digraphs_1 = digraphs; _i < digraphs_1.length; _i++) {
            var digraph = digraphs_1[_i];
            // Check each alphabet digraph
            if (DigraphHelper.compareStringableWithDigraph(chars, i, digraph)) {
                digraphStr = "";
                for (var j = 0; j < digraph.toString().length; j++) {
                    digraphStr = digraphStr.concat(chars[i + j].toString());
                }
                return new Digraph_1.Digraph({ string: digraphStr });
            }
        }
        return undefined;
    };
    DigraphHelper.compareStringableWithDigraph = function (chars, i, digraph) {
        for (var j = 0; digraph.toString()[j] && chars[i + j]; j++) {
            // Check each char in concrete digraph
            if (digraph.toString()[j] !== chars[i + j].toString().toLowerCase()) {
                return false;
            }
            if (j === digraph.toString().length - 1) {
                return true;
            }
        }
        return false;
    };
    return DigraphHelper;
}());
exports.DigraphHelper = DigraphHelper;
//# sourceMappingURL=DigraphHelper.js.map