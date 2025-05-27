import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '@core/components/theme/theme.service';
import { Theme } from '@core/components/theme/theme.type';
import { FooterComponent } from '@core/components/footer/footer.component';
import { RouterWithFadeAnimationComponent } from '@shared/components/router-with-fade-animation/router-with-fade-animation.component';

@Component({
    selector: 'app-root',
    imports: [
        ToolbarComponent,
        TranslateModule,
        FooterComponent,
        RouterWithFadeAnimationComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    title = 'UnsplashFront';
    theme: Signal<Theme>;

    constructor(private readonly _themeService: ThemeService) {
        this.theme = this._themeService.theme;
    }
}
