import { exhaustMap, Observable, skip, switchMap, takeUntil, tap } from 'rxjs';
import { PageRequest } from '@shared/datasources/page';
import { DataSource } from '@shared/datasources/datasource';

export class InfiniteDatasource<F, D> extends DataSource<F, D> {
    constructor(
        source: (filter: F, pageRequest: PageRequest) => Observable<D>,
        filter: F,
        initialPage: PageRequest = { page: 0, size: 10 },
        requestOnStart = true
    ) {
        super(source, filter, initialPage, requestOnStart);
    }

    override connect(): Observable<D> {
        return this.filter$.pipe(
            skip(this.requestOnStart ? 0 : 1),
            tap(() => this.loading$.next(true)),
            switchMap(filter => {
                return this.pageRequest$.pipe(
                    exhaustMap(pageRequest => this.source(filter, pageRequest))
                );
            }),
            tap(() => this.loading$.next(false)),
            takeUntil(this.destroyAll$)
        );
    }
}
