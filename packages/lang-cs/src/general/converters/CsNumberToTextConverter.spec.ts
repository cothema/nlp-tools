import { CsNumberToTextConverter } from "./CsNumberToTextConverter";

describe("CsNumberToTextConverter", () => {
  test("convert", () => {
    const converter = new CsNumberToTextConverter();

    const examples: [string, string[]][] = [
      ["0", ["nula"]],
      ["8", ["osm"]],
      ["-8", ["mínus", "osm"]],
      ["+8", ["plus", "osm"]],
    ];

    examples.forEach(example => {
      const converted = converter.convert(example[0]);

      expect(converted.words.length).toBe(example[1].length);

      for (let i = 0; i < example[1].length; i++) {
        expect(converted.words[i].toString()).toBe(example[1][i]);
      }
    });
  });
});
