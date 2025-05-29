import { HttpParams } from '@angular/common/http';

export function buildHttpParams(filter: object): HttpParams {
    let params = new HttpParams();
    Object.entries(filter).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            params = params.set(key, String(value));
        }
    });
    return params;
}
