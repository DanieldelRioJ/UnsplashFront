import {
    Inject,
    Injectable,
    Signal,
    signal,
    WritableSignal,
} from '@angular/core';
import { Theme, THEMES } from '@core/components/theme/theme.type';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly THEME_KEY: string = 'theme';
    private readonly _storage: Storage = localStorage;
    private readonly _theme: WritableSignal<Theme> = signal<Theme>(
        this.getDefaultTheme()
    );
    theme: Signal<Theme> = this._theme.asReadonly();

    constructor(@Inject(DOCUMENT) private document: Document) {
        this._applyThemeClass(this.theme());
    }

    getDefaultTheme(): Theme {
        const previousSessionTheme = this._storage.getItem(this.THEME_KEY);
        //If it is already set in previous session
        if (
            previousSessionTheme &&
            THEMES.includes(previousSessionTheme as Theme)
        ) {
            return previousSessionTheme as Theme;
        } else {
            //If first session, load system mode
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'DARK'
                : 'LIGHT';
        }
    }

    setTheme(theme: Theme) {
        this._theme.set(theme);
        this._storage.setItem(this.THEME_KEY, theme);
        this._applyThemeClass(theme);
    }

    private _applyThemeClass(theme: Theme) {
        const body = this.document.body;
        const themeClasses = Array.from(body.classList).filter(c =>
            c.includes('theme')
        );
        themeClasses.forEach(c => body.classList.remove(c));

        body.classList.add(theme.toLowerCase() + '-theme');
    }
}
