import { Injectable } from '@angular/core';
import { Word } from "@cothema/nlp-model";
import { AbstractClassifierService } from '../../../shared/classifier/abstract-classifier.service';
import { ApiService } from '../../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class VerbalTypeClassifierService extends AbstractClassifierService<Word> {

  protected apiSubPath = '/lexicology/classifier/verbal-type';

  constructor(
    protected apiService: ApiService,
  ) {
    super(apiService);
  }

}
