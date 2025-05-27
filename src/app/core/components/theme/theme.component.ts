import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ThemeService } from '@core/components/theme/theme.service';
import { Theme } from '@core/components/theme/theme.type';
import { slideIcon } from '@core/components/theme/theme.animations';

@Component({
    selector: 'app-theme',
    imports: [MatIconButton, MatIcon],
    animations: [slideIcon],
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent {
    theme: Signal<Theme>;

    constructor(private readonly _themeService: ThemeService) {
        this.theme = this._themeService.theme;
    }

    toggleTheme() {
        if (this.theme() === 'LIGHT') {
            this._themeService.setTheme('DARK');
        } else {
            this._themeService.setTheme('LIGHT');
        }
    }
}
