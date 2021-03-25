"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxParser = void 0;
var SyntaxParser = /** @class */ (function () {
    function SyntaxParser() {
    }
    SyntaxParser.solve = function (sentence) {
        // for (let i = 0; sentence.words[i]; i++) {
        //   if (
        //     sentence.words[i].tags.find(
        //       (el) => el.tagType === "verbal-types" && el.type === "adjectives",
        //     ) &&
        //     sentence.words[i + 1].tags.find(
        //       (el) => el.tagType === "verbal-types" && el.type === "nouns",
        //     )
        //   ) {
        //     sentence.words[i].tags.push({
        //       type: "attribute-identical", // Přívlastek shodný
        //       tagType: "syntax",
        //       probability: 0.9,
        //     });
        //   }
        // }
    };
    return SyntaxParser;
}());
exports.SyntaxParser = SyntaxParser;
//# sourceMappingURL=SyntaxParser.js.map