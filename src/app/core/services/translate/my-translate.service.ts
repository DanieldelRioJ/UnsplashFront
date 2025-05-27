import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AVAILABLE_LANGS, Lang } from '@core/services/translate/translate.type';

@Injectable({
    providedIn: 'root',
})
export class MyTranslateService {
    private readonly STORAGE_KEY = 'lang';
    private readonly _storage = localStorage;
    private readonly _lang: WritableSignal<Lang> = signal<Lang>(
        this.getDefaultLang()
    );
    readonly lang: Signal<Lang> = this._lang.asReadonly();

    constructor(private readonly _translateService: TranslateService) {}

    setLang(lang: string) {
        const langToUse = this.getLangByCode(lang);
        this._translateService.use(langToUse.code);
        this._lang.set(langToUse);
        this._storage.setItem(this.STORAGE_KEY, langToUse.code);
    }

    getLangByCode(code: string) {
        return (
            AVAILABLE_LANGS.find(lang => lang.code === code) ??
            AVAILABLE_LANGS.find(lang => lang.code === 'en')!
        );
    }

    getDefaultLang(): Lang {
        const savedLang = localStorage.getItem('lang');
        const browserLang = navigator.language.split('-')[0];
        const langToUse: string = savedLang || browserLang;
        return this.getLangByCode(langToUse);
    }
}
