"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleBookTools = void 0;
var RuleBookTools = /** @class */ (function () {
    function RuleBookTools() {
    }
    RuleBookTools.applyRuleById = function (ruleBook, meta, id, startAt) {
        if (startAt === void 0) { startAt = 0; }
        var rule = ruleBook.rules.find(function (x) { return x.id === id; });
        var out = rule.apply(meta, startAt);
        if (out.cluster > 0) {
            out.meta.rulesApplied.push(rule);
        }
        return { cluster: out.cluster, meta: out.meta };
    };
    return RuleBookTools;
}());
exports.RuleBookTools = RuleBookTools;
//# sourceMappingURL=RuleBookTools.js.map