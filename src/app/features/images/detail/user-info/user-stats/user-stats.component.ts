import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-user-stats',
    imports: [MatIcon, MatTooltip, TranslatePipe],
    templateUrl: './user-stats.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatsComponent {
    user = input.required<UnsplashUser>();
}
