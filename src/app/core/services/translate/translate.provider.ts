import {
    TranslateLoader,
    TranslateModule,
    TranslateService,
} from '@ngx-translate/core';
import {
    EnvironmentProviders,
    importProvidersFrom,
    inject,
    provideAppInitializer,
    Provider,
} from '@angular/core';
import { createTranslateLoader } from './translate.loader';
import { HttpClient } from '@angular/common/http';
import { AVAILABLE_LANGS } from '@core/services/translate/translate.type';
import { MyTranslateService } from '@core/services/translate/my-translate.service';

export function initializeTranslations() {
    const translateService = inject(TranslateService);
    const myTranslateService = inject(MyTranslateService);
    const langToUse = myTranslateService.getDefaultLang();

    translateService.addLangs(AVAILABLE_LANGS.map(lang => lang.code));
    translateService.setDefaultLang(langToUse.code);
    myTranslateService.setLang(langToUse.code);
}

export function provideTranslations(): (EnvironmentProviders | Provider)[] {
    return [
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            })
        ),
        provideAppInitializer(() => initializeTranslations()),
    ];
}
