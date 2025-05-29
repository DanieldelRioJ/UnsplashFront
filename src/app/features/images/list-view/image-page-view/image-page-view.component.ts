import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { InfiniteDatasource } from '@shared/datasources/infinite-datasource';
import {
    UnsplashImageSearchFilter,
    UnsplashImageSearchResult,
} from '../../services/http/unsplash-image.types';
import { UnsplashImageService } from '../../services/http/unsplash-image.service';
import {
    catchError,
    debounceTime,
    filter,
    Observable,
    of,
    startWith,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ImageItemComponent } from './image-item/image-item.component';
import { RouterLink } from '@angular/router';
import { SkeletonImageLoadingComponent } from '@shared/components/skeleton-image-loading/skeleton-image-loading.component';
import { ImageSearchFormService } from './image-search/image-search-form.service';
import { ImageSearchComponent } from './image-search/image-search.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpErrorHandlerService } from '@core/services/error/http-error-handler.service';
import { ImageHttpErrorHandlerService } from '../../services/http/image-http-error-handler.service';
import { fadeAnimation } from '@shared/animations/router-fade.animation';

@Component({
    selector: 'app-image-page-view',
    imports: [
        AsyncPipe,
        ImageItemComponent,
        RouterLink,
        SkeletonImageLoadingComponent,
        ImageSearchComponent,
    ],
    providers: [
        ImageSearchFormService,
        {
            provide: HttpErrorHandlerService,
            useClass: ImageHttpErrorHandlerService,
        },
    ],
    animations: [fadeAnimation],
    templateUrl: './image-page-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePageViewComponent implements OnInit, OnDestroy {
    readonly datasource = new InfiniteDatasource<
        UnsplashImageSearchFilter,
        UnsplashImageSearchResult | null
    >(
        (filter, pageRequest) =>
            this._unsquashImageService
                .searchImages(filter, pageRequest.page, pageRequest.size)
                .pipe(
                    catchError((err: HttpErrorResponse) => {
                        this._httpErrorHandlerService.handleError(err);
                        return of(null);
                    })
                ),
        {},
        { page: 0, size: 30 },
        false
    );
    data$?: Observable<UnsplashImageSearchResult | null>;
    readonly emptyArray = Array.from({ length: 30 }, (_, i) => i);

    readonly form: typeof this._imageSearchFormService.searchForm;
    private readonly _destroyRef = inject(DestroyRef);

    constructor(
        private readonly _unsquashImageService: UnsplashImageService,
        private readonly _imageSearchFormService: ImageSearchFormService,
        private readonly _httpErrorHandlerService: HttpErrorHandlerService
    ) {
        this.form = this._imageSearchFormService.searchForm;
    }

    ngOnInit(): void {
        this._listenToFilterChange();
        this.data$ = this.datasource.connect();
    }

    private _listenToFilterChange() {
        this.form.valueChanges
            .pipe(
                startWith(this.form.value),
                debounceTime(500), //Wait until no more changes
                filter(() => this.form.valid),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe(filter => {
                this.datasource.setFilter(filter);
            });
    }

    ngOnDestroy(): void {
        this.datasource.disconnect();
    }
}
