import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    req.headers.append(
        'Authorization',
        `Client-ID ${authService.getAccessKey()}`
    );
    return next(req);
};
