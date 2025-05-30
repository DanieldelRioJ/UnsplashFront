import {
    BehaviorSubject,
    combineLatest,
    debounceTime,
    Observable,
    skip,
    Subject,
    switchMap,
    takeUntil,
    tap,
} from 'rxjs';
import { PageRequest } from '@shared/datasources/page';

export abstract class DataSource<F, D> {
    loading$: Subject<boolean> = new BehaviorSubject(false);
    filter$: Subject<F>;
    pageRequest$: Subject<PageRequest>;
    currentPageRequest: PageRequest;
    initialPageRequest: PageRequest;
    source: (filter: F, pageRequest: PageRequest) => Observable<D[]>;
    requestOnStart: boolean;

    protected readonly destroyAll$ = new Subject<void>();

    constructor(
        source: (filter: F, pageRequest: PageRequest) => Observable<D[]>,
        filter: F,
        initialPage: PageRequest = { page: 0, size: 10 },
        requestOnStart = true
    ) {
        this.filter$ = new BehaviorSubject<F>(filter);
        this.initialPageRequest = { ...initialPage };
        this.pageRequest$ = new BehaviorSubject(initialPage);
        this.source = source;
        this.requestOnStart = requestOnStart;
        this.currentPageRequest = { ...initialPage };
    }

    connect(): Observable<D[]> {
        return combineLatest([this.filter$, this.pageRequest$]).pipe(
            skip(this.requestOnStart ? 0 : 1),
            tap(() => this.loading$.next(true)),
            debounceTime(500), //Wait until no more changes
            switchMap(([filter, pageRequest]) =>
                this.source(filter, pageRequest).pipe(
                    tap(() => (this.currentPageRequest = pageRequest))
                )
            ),
            tap(() => this.loading$.next(false)),
            takeUntil(this.destroyAll$)
        );
    }

    setFilter(filter: F) {
        this.filter$.next(filter);
    }

    setPageRequest(pageRequest: PageRequest) {
        this.pageRequest$.next(pageRequest);
    }

    nextPage() {
        this.pageRequest$.next({
            ...this.currentPageRequest,
            page: this.currentPageRequest.page + 1,
        });
    }

    resetPageRequest() {
        this.pageRequest$.next(this.initialPageRequest);
    }

    disconnect() {
        this.destroyAll$.next();
        this.destroyAll$.complete();
        this.filter$.complete();
        this.pageRequest$.complete();
        this.loading$.complete();
    }
}
