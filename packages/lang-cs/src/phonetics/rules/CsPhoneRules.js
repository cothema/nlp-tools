"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsPhoneRules = void 0;
var CsAddDiacriticsCaronDictionary_1 = require("../dictionaries/CsAddDiacriticsCaronDictionary");
var CsPairConsonantsDictionary_1 = require("../dictionaries/CsPairConsonantsDictionary");
var CsPhoneTools_1 = require("./CsPhoneTools");
var CsPhoneRules = /** @class */ (function () {
    function CsPhoneRules() {
    }
    CsPhoneRules.rules = [
        {
            id: 1,
            title: "Spodoba znělosti: párové souhlásky - na konci",
            quotes: [
                {
                    text: "V případě párových souhlásek probíhá spodoba znělosti ve spisovné češtině následujícím způsobem: na konci slova před pauzou (tj. pokud bezprostředně nevyslovíme další slovo) vyslovujeme vždy párovou souhlásku neznělou, respektive neznělá je celá koncová souhlásková skupina (koš [koš], lež [leš], hvozd [hvost]). Dvojice typu plod –⁠ plot tak od sebe pouze na základě výslovnosti bez kontextu nerozeznáme, protože oba výrazy znějí stejně [plot].",
                    sourceText: "Internetová jazyková příručka [online] (2008–2021). Praha: Ústav pro jazyk český AV ČR, v. v. i. Cit. 23. 3. 2021. <https://prirucka.ujc.cas.cz/>.",
                    link: "https://prirucka.ujc.cas.cz/?id=908",
                },
            ],
            apply: function (meta, startAt) {
                if (startAt === void 0) { startAt = 0; }
                var dictionary = new CsPairConsonantsDictionary_1.CsPairConsonantsDictionary();
                var phoneTokens = meta.entity.phones;
                var cluster = 0;
                if (CsPhoneTools_1.CsPhoneTools.isPairConsonant(phoneTokens[startAt]) &&
                    (phoneTokens[startAt + 1] === undefined ||
                        CsPhoneTools_1.CsPhoneTools.isPairConsonant(phoneTokens[startAt + 1])) &&
                    (phoneTokens[startAt + 2] === undefined ||
                        CsPhoneTools_1.CsPhoneTools.isPairConsonant(phoneTokens[startAt + 2])) &&
                    phoneTokens[startAt + 3] === undefined) {
                    /**
                     * [pair]([pair])([pair])[end] => [voiceless][voiceless];
                     * e.g. le-ž (š), hvo-zd (st)
                     */
                    cluster++;
                    phoneTokens[startAt].fragment.string = dictionary.translateElement(phoneTokens[startAt].fragment.toString());
                    if (phoneTokens[startAt + 1] !== undefined) {
                        phoneTokens[startAt + 1].fragment.string = dictionary.translateElement(phoneTokens[startAt + 1].fragment.toString());
                        cluster++; // skip next phone
                    }
                    if (phoneTokens[startAt + 2] !== undefined) {
                        phoneTokens[startAt + 2].fragment.string = dictionary.translateElement(phoneTokens[startAt + 2].fragment.toString());
                        cluster++; // skip next phone
                    }
                }
                return { cluster: cluster, meta: meta };
            },
        },
        {
            id: 2,
            title: "Změkčení před i/í",
            quotes: [],
            apply: function (meta, startAt) {
                // TODO: find quoetes
                if (startAt === void 0) { startAt = 0; }
                var dictionaryCaron = new CsAddDiacriticsCaronDictionary_1.CsAddDiacriticsCaronDictionary();
                var phoneTokens = meta.entity.phones;
                var cluster = 0;
                if (["d", "t", "n"].includes(phoneTokens[startAt].fragment.string) &&
                    phoneTokens[startAt + 1] !== undefined &&
                    ["i", "í"].includes(phoneTokens[startAt + 1].fragment.string)) {
                    cluster = 2;
                    phoneTokens[startAt].fragment.string = dictionaryCaron.translateElement(phoneTokens[startAt].fragment.toString());
                }
                return { cluster: cluster, meta: meta };
            },
        },
    ];
    return CsPhoneRules;
}());
exports.CsPhoneRules = CsPhoneRules;
//# sourceMappingURL=CsPhoneRules.js.map