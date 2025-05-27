import {
    ApplicationConfig,
    importProvidersFrom,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@core/interceptors/auth/auth.interceptor';
import { provideTranslations } from '@core/services/translate/translate.provider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(withInterceptors([authInterceptor])),
        ...provideTranslations(),
        importProvidersFrom(BrowserAnimationsModule),
        provideRouter(routes),
    ],
};
