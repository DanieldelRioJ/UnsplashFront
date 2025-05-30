import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../services/http/unsplash-image.types';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { UserSocialMediaComponent } from './user-social-media/user-social-media.component';
import { UserPersonalDataComponent } from './user-personal-data/user-personal-data.component';
import { UserStatsComponent } from './user-stats/user-stats.component';

@Component({
    selector: 'app-user-info',
    imports: [
        MatExpansionModule,
        MatIcon,
        UserSocialMediaComponent,
        UserPersonalDataComponent,
        UserStatsComponent,
    ],
    templateUrl: './user-info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
    user = input.required<UnsplashUser>();
}
