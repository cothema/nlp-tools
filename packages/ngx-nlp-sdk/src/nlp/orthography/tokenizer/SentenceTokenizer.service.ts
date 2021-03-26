import { Injectable } from '@angular/core';
import { Sentence } from "@cothema/nlp-model";
import { ApiService } from '../../../shared/services/Api.service';
import { AbstractTokenizerService } from '../../../shared/tokenizer/AbstractTokenizer.service';

@Injectable({
  providedIn: 'root',
})
export class SentenceTokenizerService extends AbstractTokenizerService<Sentence> {

  protected apiSubPath = '/orthography/tokenizer/sentence';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
