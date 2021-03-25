import { IDictionary } from "../interfaces/IDictionary";
export declare class Dictionary<Output = string> {
    dictionary: IDictionary<Output>;
    constructor(dictionary: IDictionary<Output>);
    translateElement(input: string): Output | undefined;
    translateElementReverse(input: Output): string | undefined;
    translateArray(input: string[]): Output[];
    translateArrayReverse(input: Output[]): string[];
}
