import {
    debounceTime,
    exhaustMap,
    filter,
    map,
    Observable,
    skip,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs';
import { PageRequest } from '@shared/datasources/page';
import { DataSource } from '@shared/datasources/datasource';

export class InfiniteDatasource<F, D> extends DataSource<F, D> {
    private data: D[] = [];
    private noMoreData = false;

    constructor(
        source: (filter: F, pageRequest: PageRequest) => Observable<D[]>,
        filter: F,
        initialPage: PageRequest = { page: 0, size: 10 },
        requestOnStart = true
    ) {
        super(source, filter, initialPage, requestOnStart);
    }

    override connect(): Observable<D[]> {
        return this.filter$.pipe(
            skip(this.requestOnStart ? 0 : 1),
            tap(() => (this.noMoreData = false)),
            tap(() => this.resetPageRequest()),
            switchMap(filterData => {
                return this.pageRequest$.pipe(
                    filter(() => !this.noMoreData),
                    tap(() => this.loading$.next(true)),
                    debounceTime(500),
                    exhaustMap(pageRequest =>
                        this.source(filterData, pageRequest).pipe(
                            tap(data => {
                                if (data.length === 0) {
                                    this.noMoreData = true;
                                }
                            }),
                            tap(() => (this.currentPageRequest = pageRequest)),
                            map(data => {
                                return [...this.data, ...data];
                            }),
                            tap(data => (this.data = data))
                        )
                    )
                );
            }),
            tap(() => this.loading$.next(false)),
            takeUntil(this.destroyAll$)
        );
    }

    override resetPageRequest() {
        this.data = [];
        this.currentPageRequest = this.initialPageRequest;
        super.resetPageRequest();
    }
}
