import { ModifiableToken } from "../../../../@core/src/model/ModifiableToken";
import { LexicologyErrorType } from "../enums/LexicologyErrorType";
export declare class LexicologyError {
    tokenInfo?: ModifiableToken;
    fixed?: boolean;
    type?: LexicologyErrorType;
    constructor(init?: Partial<LexicologyError>);
}
