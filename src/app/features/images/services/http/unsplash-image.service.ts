import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    UnsplashImage,
    UnsplashImageSearchFilter,
    UnsplashImageSearchResult,
} from './unsplash-image.types';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { buildHttpParams } from '@shared/utils/build-http-param.util';

@Injectable({
    providedIn: 'root',
})
export class UnsplashImageService {
    constructor(private readonly _httpClient: HttpClient) {}

    searchImages(
        filter: UnsplashImageSearchFilter,
        page: number = 0,
        size: number = 10
    ): Observable<UnsplashImageSearchResult> {
        const params = buildHttpParams({
            ...filter,
            page: page,
            per_page: size,
        });
        return this._httpClient.get<UnsplashImageSearchResult>(
            `${environment.api_url}search/photos`,
            {
                params: params,
            }
        );
    }

    getImage(id: string): Observable<UnsplashImage> {
        return this._httpClient.get<UnsplashImage>(
            `${environment.api_url}photos/${id}`
        );
    }
}
