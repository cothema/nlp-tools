import { Injectable } from '@angular/core';
import { Word } from "@cothema/nlp-model";
import { ApiService } from '../../../shared/services/api.service';
import { AbstractTokenizerService } from '../../../shared/tokenizer/abstract-tokenizer.service';

@Injectable({
  providedIn: 'root',
})
export class WordTokenizerService extends AbstractTokenizerService<Word> {

  protected apiSubPath = '/orthography/tokenizer/word';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
