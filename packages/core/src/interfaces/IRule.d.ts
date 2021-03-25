import { Meta } from "../../../@model/src/orthography/Meta";
import { IQuote } from "./IQuote";
export interface IRule<T> {
    id: number;
    title: string;
    quotes: IQuote[];
    apply: (meta: Meta<T>, startAt: number) => {
        cluster: number;
        meta: Meta<T>;
    };
}
