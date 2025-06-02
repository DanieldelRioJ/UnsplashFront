import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@core/interceptors/auth/auth.interceptor';
import { provideTranslations } from '@core/services/translate/translate.provider';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCustomIcons } from '@core/providers/icon.provider';
import { loadingBarInterceptor } from '@core/components/loading-bar/loading-bar.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideLocale } from '@core/providers/locale.provider';
import { matFormFieldProvider } from '@core/providers/mat-form-field.provider';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(
            withInterceptors([authInterceptor, loadingBarInterceptor])
        ),
        ...provideTranslations(),
        provideCustomIcons(),
        provideLocale(),
        provideAnimations(),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'top',
            })
        ),
        provideToastr(),
        matFormFieldProvider(),
    ],
};
