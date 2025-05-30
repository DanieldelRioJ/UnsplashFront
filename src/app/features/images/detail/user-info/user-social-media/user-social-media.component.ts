import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-user-social-media',
    imports: [MatIcon],
    templateUrl: './user-social-media.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSocialMediaComponent {
    user = input.required<UnsplashUser>();
}
