import { Sentence } from "../../../model/src/orthography/Sentence";
import { Text } from "../../../model/src/orthography/Text";
import { Word } from "../../../model/src/orthography/Word";
import { SentenceModality } from "../semantics/enums/SentenceModality";

export class TextTokenizer {
  static readonly interpunction = [".", ",", "?", "!", ":"];

  static getWords(input: Text | Sentence) {
    const str = TextTokenizer.removeInterpunction(input.toString());
    return str
      .split(" ")
      .filter((el) => el.trim().length)
      .map((el) => new Word(el));
  }

  static removeInterpunction(input: string) {
    for (const interpunctionElement of TextTokenizer.interpunction) {
      input = input.replace(interpunctionElement, "");
    }

    return input;
  }

  static getSentences(text: Text) {
    const parts = text.string.split(/(\.|\?|\!)/g);

    const out = [];
    for (let i = 0; parts[i] !== undefined; i = i + 2) {
      if (parts[i + 1] === undefined) {
        parts[i + 1] = "";
      }
      out.push(parts[i] + parts[i + 1]);
    }

    return out
      .filter((el) => {
        return el.length;
      })
      .map((el) => {
        return new Sentence(el);
      });
  }

  static getSentenceType(sentence: Sentence): SentenceModality | null {
    const end = sentence.string.substr(sentence.string.length - 1);
    switch (end) {
      case ".":
        return SentenceModality.Statement;
      case "?":
        return SentenceModality.Question;
      case "!":
        return SentenceModality.Command;
    }
    return null;
  }
}
