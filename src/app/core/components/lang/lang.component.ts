import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { MatSelect, MatSelectTrigger } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { AVAILABLE_LANGS, Lang } from '@core/services/translate/translate.type';
import { MyTranslateService } from '@core/services/translate/my-translate.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-lang',
    imports: [MatSelect, MatSelectTrigger, MatOption, NgTemplateOutlet],
    templateUrl: './lang.component.html',
    styleUrl: './lang.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangComponent {
    languages = AVAILABLE_LANGS;
    lang: Signal<Lang>;

    constructor(private readonly _myTranslateService: MyTranslateService) {
        this.lang = this._myTranslateService.lang;
    }

    setLang(lang: string) {
        this._myTranslateService.setLang(lang);
    }
}
