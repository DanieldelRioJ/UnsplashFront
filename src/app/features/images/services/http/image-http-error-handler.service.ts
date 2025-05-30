import { Injectable } from '@angular/core';
import { HttpErrorHandlerService } from '@core/services/error/http-error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage } from '@core/services/error/http-error-handler.types';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ImageHttpErrorHandlerService extends HttpErrorHandlerService {
    constructor(private readonly _translateService: TranslateService) {
        super();
    }

    protected _handleError(error: HttpErrorResponse): ErrorMessage {
        const errorMessage: ErrorMessage = {
            title: 'ERROR_HANDLER.IMAGES.TITLE',
            message: '',
        };
        if (error.error) {
            errorMessage.message =
                error.error?.errors?.join(', ') ?? error.error;
        } else {
            switch (error.status) {
                case 404:
                    errorMessage.message = 'ERROR_HANDLER.IMAGES.MESSAGE.404';
                    break;
                case 500:
                    errorMessage.message = 'ERROR_HANDLER.IMAGES.MESSAGE.500';
                    break;
            }
        }

        return Object.fromEntries(
            Object.entries(errorMessage)
                .filter(([_, value]) => !!value)
                .map(([key, value]) => [
                    key,
                    this._translateService.instant(value),
                ])
        ) as ErrorMessage;
    }
}
