import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export function matFormFieldProvider() {
    return {
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: {
            subscriptSizing: 'dynamic',
        },
    };
}
