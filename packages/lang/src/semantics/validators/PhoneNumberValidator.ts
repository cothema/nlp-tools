import { RegExpValidator } from "@cothema/nlp-core";

export class PhoneNumberValidator extends RegExpValidator {
  regExp = /([+]?\d{1,3}[ \s]?)?(\d{9}?)/g;
}
