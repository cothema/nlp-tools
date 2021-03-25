import { Meta } from "../../../model/src/orthography/Meta";
import { IRuleBook } from "../interfaces/IRuleBook";

export class RuleBookTools {
  static applyRuleById<T>(
    ruleBook: IRuleBook<T>,
    meta: Meta<T>,
    id: number,
    startAt: number = 0,
  ): { cluster: number; meta: Meta<T> } {
    const rule = ruleBook.rules.find((x) => x.id === id);

    const out = rule.apply(meta, startAt);

    if (out.cluster > 0) {
      out.meta.rulesApplied.push(rule);
    }

    return { cluster: out.cluster, meta: out.meta };
  }
}
