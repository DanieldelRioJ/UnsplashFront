import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UnsplashQueryService {
    constructor(private readonly _httpClient: HttpClient) {}

    query(search: string) {
        return this._httpClient.get(
            `${environment.api_url}/search/photos?query=${search}`
        );
    }
}
