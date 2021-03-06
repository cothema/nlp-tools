import { IMetaTokenizer, IStringableTokenizer, RuleBookTools, StringableTokenizer } from "@cothema/nlp-core";
import { Digraph, IStringable, Letter, Meta, Phone, Token, Voice } from "@cothema/nlp-model";
import { CsNumberToTextConverter } from "../../general/converters/CsNumberToTextConverter";
import { CsLetterTokenizer } from "../../orthography/tokenizers/CsLetterTokenizer";
import { CsPairConsonantsDictionary } from "../dictionaries/CsPairConsonantsDictionary";
import { CsDiphthongList } from "../lists/CsDiphthongList";
import { CsPairConsonantList } from "../lists/CsPairConsonantList";
import { CsPhoneRules } from "../rules/CsPhoneRules";
import { CsPhoneTools } from "../rules/CsPhoneTools";

export class CsSimplePhoneTokenizer
  extends StringableTokenizer
  implements IStringableTokenizer<Phone>, IMetaTokenizer<Voice> {
  private letterTokenizer = new CsLetterTokenizer();

  constructor() {
    super();
    this.letterTokenizer.digraphs = this.letterTokenizer.digraphs.concat(
      CsDiphthongList.list.map((x) => new Digraph({ string: x })),
    );
  }

  tokenize(input: IStringable): Token<Phone, Letter>[] {
    return this.tokenizeToMeta(input).entity.phones;
  }

  /**
   * CZ: Spodoba znělosti
   *
   * @see https://prirucka.ujc.cas.cz/?id=909
   * @see https://www.diktatorek.cz/Scholasticus/Cesky-jazyk/Pravopis/Pravopis-skupin-souhlasek/Pravopis-souhlasek-uvnitr-slov-help.html
   */
  private solveVoice(phoneTokensIn: Token<Phone, Letter>[]): Meta<Voice> {
    const meta = new Meta<Voice>();
    meta.entity = new Voice();

    meta.entity.phones = [];
    for (let i = 0; phoneTokensIn[i]; i++) {
      meta.entity.phones.push(phoneTokensIn[i]);
    }

    const phoneTokens = meta.entity.phones;

    // TODO: voiceless prepositions

    const dictionary = new CsPairConsonantsDictionary();

    for (let i = 0; phoneTokens[i]; i++) {
      switch (phoneTokens[i].fragment.string) {
        case "w":
          phoneTokens[i].fragment.string = "v";
          continue;
        case "x":
          phoneTokens[i].fragment.string = "ks";
          continue;
        case "y":
          phoneTokens[i].fragment.string = "i";
          continue;
        case "ý":
          phoneTokens[i].fragment.string = "í";
          continue;
        case "ů":
          phoneTokens[i].fragment.string = "ú";
          continue;
      }

      if (phoneTokens[i] && !phoneTokens[i + 1]) {
        // Last phone
        /**
         * Hotfix: My rule
         */
        if (
          CsPhoneTools.isPairConsonant(phoneTokens[i]) &&
          CsPhoneTools.isVoicedConsonant(phoneTokens[i])
        ) {
          // [voiceless][voiced] => [voiced][voiced]
          phoneTokens[i].fragment.string = dictionary.translateElement(
            phoneTokens[i].fragment.toString(),
          );
        }
        break;
      } else if (
        !CsPhoneTools.isPairConsonant(phoneTokens[i]) ||
        ["p", "t", "ť", "ch", "f", "š"].includes(
          phoneTokens[i].fragment.toString(),
        ) || // Hotfix (c,č): My rule
        !CsPairConsonantList.list
          .concat(["c", "č"])
          .includes(phoneTokens[i + 1].fragment.toString()) // Hotfix (c,č): My rule
      ) {
      } else if (
        // ["v", "z"].includes(phones[i].toString())
        CsPhoneTools.isVoicedConsonant(phoneTokens[i]) &&
        CsPhoneTools.isVoicelessConsonant(phoneTokens[i + 1])
      ) {
        // [voiced][voiceless] => [voiceless][voiceless]
        phoneTokens[i].fragment.string = dictionary.translateElement(
          phoneTokens[i].fragment.toString(),
        );
        i++; // skip next phone
      } else if (
        // ["f", "s"].includes(phones[i].toString())
        CsPhoneTools.isVoicelessConsonant(phoneTokens[i]) &&
        CsPhoneTools.isVoicedConsonant(phoneTokens[i + 1])
      ) {
        // [voiceless][voiced] => [voiced][voiced]
        // e.g. pro-sb-a
        phoneTokens[i].fragment.string = dictionary.translateElementReverse(
          phoneTokens[i].fragment.toString(),
        );
        i++; // skip next phone
      }

      let ruleOut = RuleBookTools.applyRuleById(CsPhoneRules, meta, 1, i);
      if (ruleOut.cluster > 0) {
        i += ruleOut.cluster - 1;
        continue;
      }

      ruleOut = RuleBookTools.applyRuleById(CsPhoneRules, meta, 2, i);
      if (ruleOut.cluster > 0) {
        i += ruleOut.cluster - 1;
        continue;
      }
    }

    meta.entity.phones = phoneTokens;

    return meta;
  }

  tokenizeToMeta(input: IStringable) {
    // TODO: split word to parts (prefix, root...) first
    // TODO: modifiable token

    const letterTokensPre = this.letterTokenizer.tokenize(input);
    const phoneTokens: Token<Phone>[] = [];

    const letterTokens = this.solveAllNumbers(letterTokensPre);

    for (let i = 0; letterTokens[i]; i++) {
      const letterStr = letterTokens[i].fragment.toString().toLowerCase();

      const nextLetterStr = letterTokens[i + 1]?.fragment
        .toString()
        .toLowerCase();
      const prevLetterStr = letterTokens[i - 1]?.fragment
        .toString()
        .toLowerCase();

      if (letterStr === "ě") {
        if (prevLetterStr === "d") {
          phoneTokens[phoneTokens.length - 1].fragment.string = "ď";
        } else if (prevLetterStr === "t") {
          phoneTokens[phoneTokens.length - 1].fragment.string = "ť";
        } else if (prevLetterStr === "n") {
          phoneTokens[phoneTokens.length - 1].fragment.string = "ň";
        } else {
          phoneTokens.push(
            new Token({
              origIndex: letterTokens[i].origIndex,
              origLength: 1,
              fragment: new Phone({
                string: "j",
              }),
              orig: letterTokens,
            }),
          );
        }
        phoneTokens.push(
          new Token({
            origIndex: letterTokens[i].origIndex,
            origLength: 1,
            fragment: new Phone({
              string: "e",
            }),
            orig: letterTokens,
          }),
        );
      } else if (nextLetterStr && letterStr === "s" && nextLetterStr === "h") {
        const length = 2;
        phoneTokens.push(
          new Token({
            origIndex: letterTokens[i].origIndex,
            origLength: length,
            fragment: new Phone({
              string: "š",
            }),
            orig: letterTokens,
          }),
        );
        i += length - 1; // skip next letter
      } else if (nextLetterStr && letterStr === "t" && nextLetterStr === "h") {
        const length = 2;
        phoneTokens.push(
          new Token({
            origIndex: letterTokens[i].origIndex,
            origLength: length,
            fragment: new Phone({
              string: "t",
            }),
            orig: letterTokens,
          }),
        );
        i += length - 1; // skip next letter
      } else if (letterStr === " ") {
        // do nothing
      } else {
        phoneTokens.push(
          new Token({
            origIndex: letterTokens[i].origIndex,
            origLength: Array.from(letterStr).length,
            fragment: new Phone({
              string: letterStr,
            }),
            orig: letterTokens,
          }),
        );
      }
    }

    return this.solveVoice(phoneTokens);
  }

  private solveNumber(number: string): Token<Letter | Digraph>[] {
    const numberConverter = new CsNumberToTextConverter();
    const numberText = numberConverter.convert(number).words[0].toString();

    return this.letterTokenizer.tokenize(numberText);
  }

  private solveAllNumbers(letterTokensPre: Token<Letter>[]): Token<Letter>[] {
    const letterTokens: Token<Letter>[] = [];
    for (let i = 0; letterTokensPre[i]; i++) {
      if (!isNaN(+letterTokensPre[i].fragment.toString())) {
        this.solveNumber(letterTokensPre[i].fragment.toString()).forEach(letter => {
          letter.orig = letterTokensPre[i].orig;
          letter.origIndex = letterTokensPre[i].origIndex;
          letter.origLength = letterTokensPre[i].origLength;

          letterTokens.push(letter);
        });
      } else {
        letterTokens.push(letterTokensPre[i]);
      }
    }
    return letterTokens;
  }
}
