import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingBarService } from '@core/components/loading-bar/loading-bar.service';
import { finalize } from 'rxjs';

export const loadingBarInterceptor: HttpInterceptorFn = (req, next) => {
    const loadingBarService = inject(LoadingBarService);
    loadingBarService.startRequest();
    return next(req).pipe(
        finalize(() => {
            loadingBarService.endRequest();
        })
    );
};
