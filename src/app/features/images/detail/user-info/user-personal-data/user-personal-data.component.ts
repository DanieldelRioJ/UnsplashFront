import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';

@Component({
    selector: 'app-user-personal-data',
    imports: [],
    templateUrl: './user-personal-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalDataComponent {
    user = input.required<UnsplashUser>();
}
