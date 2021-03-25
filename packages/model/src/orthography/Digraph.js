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
exports.Digraph = void 0;
var TokenizableStringableEntity_1 = require("../../../@core/src/model/TokenizableStringableEntity");
/**
 * See: https://en.wikipedia.org/wiki/Digraph_(orthography)
 * E.g. CZ: ch, SK: dz / dž / ch
 */
var Digraph = /** @class */ (function (_super) {
    __extends(Digraph, _super);
    function Digraph(init) {
        var _this = _super.call(this) || this;
        _this.type = "digraph";
        Object.assign(_this, init);
        return _this;
    }
    return Digraph;
}(TokenizableStringableEntity_1.TokenizableStringableEntity));
exports.Digraph = Digraph;
//# sourceMappingURL=Digraph.js.map