import { Injectable } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
    readonly defaultLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.setdefaultLanguage(this.defaultLanguage);
  }

  setdefaultLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  getTranslation(
    key: string | Array<string>,
    interpolateParams?: Object
  ): string | any {
    return this.translate.instant(key, interpolateParams);
  }
}

export class TranslateLanguageLoader implements TranslateLoader {
    public getTranslation(lang: string): any {
        switch(lang) {
            case 'fr':
                return of(require('../../../assets/i18n/en.json'));
            default:
                return of(require('../../../assets/i18n/en.json'));
        }
    }
}