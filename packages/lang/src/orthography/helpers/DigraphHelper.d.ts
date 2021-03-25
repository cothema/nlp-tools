import { Char } from "../../../../@model/src/orthography/Char";
import { Digraph } from "../../../../@model/src/orthography/Digraph";
export declare class DigraphHelper {
    static identifyDigraph(digraphs: Digraph[], chars: Char[], i: number): Digraph | undefined;
    static compareStringableWithDigraph(chars: Char[], i: number, digraph: Digraph): boolean;
}
