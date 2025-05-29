import { computed, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoadingBarService {
    constructor() {}

    private _activeRequests = signal(0);
    activeRequests = this._activeRequests.asReadonly();
    hasNoActiveRequests = computed(() => this.activeRequests() === 0);

    startRequest() {
        this._activeRequests.update(activeRequests => ++activeRequests);
    }

    endRequest() {
        this._activeRequests.update(activeRequests => --activeRequests);
    }
}
