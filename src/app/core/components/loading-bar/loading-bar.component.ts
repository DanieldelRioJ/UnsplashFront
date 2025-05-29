import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { LoadingBarService } from '@core/components/loading-bar/loading-bar.service';

@Component({
    selector: 'app-loading-bar',
    imports: [MatProgressBar],
    templateUrl: './loading-bar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBarComponent {
    hasNoActiveRequests: typeof this._loadingBarService.hasNoActiveRequests;

    constructor(readonly _loadingBarService: LoadingBarService) {
        this.hasNoActiveRequests = this._loadingBarService.hasNoActiveRequests;
    }
}
