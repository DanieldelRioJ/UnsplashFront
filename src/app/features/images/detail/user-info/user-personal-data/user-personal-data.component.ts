import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-user-personal-data',
    imports: [TranslatePipe],
    templateUrl: './user-personal-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalDataComponent {
    user = input.required<UnsplashUser>();
}
