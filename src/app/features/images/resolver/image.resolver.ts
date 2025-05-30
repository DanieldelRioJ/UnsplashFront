import { inject } from '@angular/core';
import { UnsplashImageService } from '../services/http/unsplash-image.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorHandlerService } from '@core/services/error/http-error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

export const imageResolver = (route: ActivatedRouteSnapshot) => {
    const unsplashImageService = inject(UnsplashImageService);
    const httpErrorHandlerService = inject(HttpErrorHandlerService);
    const router = inject(Router);
    return unsplashImageService.getImage(route.paramMap.get('id')!).pipe(
        catchError((error: HttpErrorResponse) => {
            httpErrorHandlerService.handleError(error);
            router.navigate(['/'], {
                queryParamsHandling: 'preserve',
            });
            return of(null);
        })
    );
};
