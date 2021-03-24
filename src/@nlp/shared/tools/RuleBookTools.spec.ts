import { CsPhoneRules } from "../../lang/cs/phonetics/rules/CsPhoneRules";
import { CsSimplePhoneTokenizer } from "../../lang/cs/phonetics/tokenizers/CsSimplePhoneTokenizer";
import { RuleBookTools } from "./RuleBookTools";

describe("RuleBookTools", () => {
  test("applyRuleById", () => {
    const tokenizer = new CsSimplePhoneTokenizer();

    const out = RuleBookTools.applyRuleById(
      CsPhoneRules,
      tokenizer.tokenizeToMeta("hvozd"),
      1,
      3,
    );

    expect(out.cluster).toBe(2);
  });
});
