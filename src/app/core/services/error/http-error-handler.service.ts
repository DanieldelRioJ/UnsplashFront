import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ErrorMessage } from '@core/services/error/http-error-handler.types';
import { ToastrService } from 'ngx-toastr';

export abstract class HttpErrorHandlerService {
    private readonly toastService = inject(ToastrService);

    handleError(error: HttpErrorResponse) {
        const errorObject = this._handleError(error);
        this.toastService.error(errorObject.message, errorObject.title, {
            positionClass: 'toast-top-center',
            timeOut: 3000,
            closeButton: true,
        });
    }

    protected abstract _handleError(error: HttpErrorResponse): ErrorMessage;
}
