import { Injectable } from "@angular/core";
import { Syllable } from "@cothema/nlp-model";
import { ApiService } from "../../../shared/services/api.service";
import { AbstractTokenizerService } from "../../../shared/tokenizer/abstract-tokenizer.service";

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
