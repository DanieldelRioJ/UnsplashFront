import { Directive, HostListener, input } from '@angular/core';
import { UnsplashImage } from '../../../features/images/services/http/unsplash-image.types';
import { HttpClient } from '@angular/common/http';

@Directive({
    selector: '[appUnsplashImageDownload]',
})
export class UnsplashImageDownloadDirective {
    appUnsplashImageDownload = input.required<UnsplashImage>();

    constructor(private readonly http: HttpClient) {}

    @HostListener('click')
    downloadImage() {
        const url = this.appUnsplashImageDownload().urls.full;

        this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download =
                this.appUnsplashImageDownload().slug ??
                this.appUnsplashImageDownload().id;
            a.click();
            window.URL.revokeObjectURL(blobUrl);
        });
    }
}
