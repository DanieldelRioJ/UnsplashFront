import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-user-stats',
    imports: [MatIcon],
    templateUrl: './user-stats.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatsComponent {
    user = input.required<UnsplashUser>();
}
