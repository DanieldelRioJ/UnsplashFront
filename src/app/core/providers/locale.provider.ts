import { LOCALE_ID, Provider } from '@angular/core';
import { MyTranslateService } from '@core/services/translate/my-translate.service';
import localeGl from '@angular/common/locales/gl';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeGl);
registerLocaleData(localeEs);
registerLocaleData(localeEn);

export function provideLocale(): Provider {
    return {
        provide: LOCALE_ID,
        useFactory: (myTranslateService: MyTranslateService) =>
            myTranslateService.getDefaultLang().code,
        deps: [MyTranslateService],
    };
}
