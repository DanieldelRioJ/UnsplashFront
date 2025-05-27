import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Theme, THEMES } from '@core/components/theme/theme.type';

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

    constructor() {}

    getDefaultTheme(): Theme {
        const previousSessionTheme = this._storage.getItem(this.THEME_KEY);
        //If it is already setted in previous session
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
    }
}
