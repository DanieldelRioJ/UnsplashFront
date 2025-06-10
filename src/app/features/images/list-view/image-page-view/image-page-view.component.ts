import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    OnDestroy,
    OnInit,
    signal,
} from '@angular/core';
import { InfiniteDatasource } from '@shared/datasources/infinite-datasource';
import {
    UnsplashImage,
    UnsplashImageSearchFilter,
} from '../../services/http/unsplash-image.types';
import { UnsplashImageService } from '../../services/http/unsplash-image.service';
import { catchError, filter, map, Observable, of, startWith, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ImageSearchFormService } from './image-search/image-search-form.service';
import { ImageSearchComponent } from './image-search/image-search.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpErrorHandlerService } from '@core/services/error/http-error-handler.service';
import { fadeAnimation } from '@shared/animations/router-fade.animation';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { NoValidFilterPlaceholderComponent } from '@shared/components/no-valid-filter-placeholder/no-valid-filter-placeholder.component';
import { TranslatePipe } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSource } from '@shared/datasources/datasource';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
    selector: 'app-image-page-view',
    imports: [
        AsyncPipe,
        ImageSearchComponent,
        ImageGridComponent,
        NoValidFilterPlaceholderComponent,
        TranslatePipe,
        InfiniteScrollDirective,
    ],
    providers: [ImageSearchFormService],
    animations: [fadeAnimation],
    templateUrl: './image-page-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePageViewComponent implements OnInit, OnDestroy {
    // TODO por que o datasource é un signal? non podería crear directamente en construcción? creo que tería todo, non?
    datasource = signal<DataSource<
        UnsplashImageSearchFilter,
        UnsplashImage
    > | null>(null);
    data$?: Observable<UnsplashImage[] | null>;

    readonly form: typeof this._imageSearchFormService.searchForm;
    private readonly _destroyRef = inject(DestroyRef);

    constructor(
        private readonly _unsquashImageService: UnsplashImageService,
        private readonly _imageSearchFormService: ImageSearchFormService,
        private readonly _httpErrorHandlerService: HttpErrorHandlerService,
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute
    ) {
        this.form = this._imageSearchFormService.searchForm;
    }

    ngOnInit(): void {
        this._loadPreviousFilters();
        this._createDataSource();
        this._listenToFilterChange();
        this._connectDataSource();
    }

    private _connectDataSource() {
        this.data$ = this.datasource()?.connect();
    }

    private _loadPreviousFilters() {
        this.form.patchValue(this._activatedRoute.snapshot.queryParams);
    }

    private _createDataSource() {
        this.datasource.set(
            new InfiniteDatasource<UnsplashImageSearchFilter, UnsplashImage>(
                (filter, pageRequest) =>
                    this._unsquashImageService
                        .searchImages(
                            filter,
                            pageRequest.page,
                            pageRequest.size
                        )
                        .pipe(
                            map(result => result.results),
                            catchError((err: HttpErrorResponse) => {
                                this._httpErrorHandlerService.handleError(err);
                                return of([]);
                            })
                        ),
                {},
                { page: 0, size: 15 },
                this.form.valid
            )
        );
    }

    private _listenToFilterChange() {
        this.form.valueChanges
            .pipe(
                startWith(this.form.value),
                tap(filter => this._updateUrl(filter)),
                filter(() => this.form.valid),
                takeUntilDestroyed(this._destroyRef)
            )
            .subscribe(filter => {
                this.datasource()?.setFilter(filter);
            });
    }

    private _updateUrl(filter: UnsplashImageSearchFilter) {
        this._router.navigate([], {
            relativeTo: this._activatedRoute,
            queryParams: filter,
            replaceUrl: true,
        });
    }

    ngOnDestroy(): void {
        this.datasource()?.disconnect();
    }

    scrollEnd() {
        this.datasource()?.nextPage();
    }
}
