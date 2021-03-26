import { Injectable } from "@angular/core";
import { Syllable } from "@cothema/nlp-model";
import { ApiService } from "../../../shared/services/Api.service";
import { AbstractTokenizerService } from "../../../shared/tokenizer/AbstractTokenizer.service";

@Injectable({
  providedIn: "root",
})
export class SyllableTokenizerService extends AbstractTokenizerService<Syllable> {

  protected apiSubPath = "/phonetics/tokenizer/syllable";

  constructor(
    apiService: ApiService,
  ) {
    super(apiService);
  }

}
