import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FormErrorService {
    constructor(private readonly _translateService: TranslateService) {}

    getTranslation(
        [error, errorValue]: [string, any],
        fieldName?: string
    ): Observable<string | null> {
        switch (error) {
            case 'required': {
                return this._translateService.get('FORM_ERROR.REQUIRED', {
                    fieldName,
                });
            }
            case 'minlength': {
                return this._translateService.get('FORM_ERROR.MIN_LENGTH', {
                    fieldName,
                    requiredLength: errorValue.requiredLength,
                });
            }
            case 'maxlength': {
                return this._translateService.get('FORM_ERROR.MAX_LENGTH', {
                    fieldName,
                    requiredLength: errorValue.requiredLength,
                });
            }

            case 'min': {
                return this._translateService.get('FORM_ERROR.MIN', {
                    fieldName,
                    min: errorValue.min,
                });
            }

            case 'max': {
                return this._translateService.get('FORM_ERROR.MAX', {
                    fieldName,
                    max: errorValue.max,
                });
            }

            case 'pattern': {
                return this._translateService.get('FORM_ERROR.PATTERN', {
                    fieldName,
                });
            }

            case 'jsonInvalid': {
                return this._translateService.get('FORM_ERROR.JSON', {
                    fieldName,
                });
            }
            case 'email': {
                return this._translateService.get('FORM_ERROR.EMAIL', {
                    fieldName,
                });
            }
            default:
                return of(null);
        }
    }
}
