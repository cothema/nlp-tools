import { Meta } from "../../../@model/src/orthography/Meta";
import { IRuleBook } from "../interfaces/IRuleBook";
export declare class RuleBookTools {
    static applyRuleById<T>(ruleBook: IRuleBook<T>, meta: Meta<T>, id: number, startAt?: number): {
        cluster: number;
        meta: Meta<T>;
    };
}
