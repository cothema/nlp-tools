"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringableEntity = void 0;
var StringableEntity = /** @class */ (function () {
    function StringableEntity(init) {
        this.type = "unknown";
        Object.assign(this, init);
    }
    StringableEntity.prototype.toString = function () {
        return this.string;
    };
    /**
     * You should call e.g. new StringableEntity(entity.clone()) to be able
     * to class fully with methods.
     */
    StringableEntity.prototype.clone = function () {
        return new StringableEntity(this);
    };
    return StringableEntity;
}());
exports.StringableEntity = StringableEntity;
//# sourceMappingURL=StringableEntity.js.map