import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-user-social-media',
    imports: [MatIcon, MatTooltip, TranslatePipe],
    templateUrl: './user-social-media.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSocialMediaComponent {
    user = input.required<UnsplashUser>();
}
