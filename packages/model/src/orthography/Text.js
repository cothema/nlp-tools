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
exports.Text = void 0;
var StringableEntity_1 = require("../../../@core/src/model/StringableEntity");
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(init) {
        var _this = _super.call(this) || this;
        _this.type = "text";
        Object.assign(_this, init);
        return _this;
    }
    return Text;
}(StringableEntity_1.StringableEntity));
exports.Text = Text;
//# sourceMappingURL=Text.js.map