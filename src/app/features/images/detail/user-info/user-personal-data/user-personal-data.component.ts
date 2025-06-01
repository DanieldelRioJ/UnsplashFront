import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';
import { TranslatePipe } from '@ngx-translate/core';
import { PropertyComponent } from '@shared/components/property/property.component';
import { PropertyValueComponent } from '@shared/components/property/property-value/property-value.component';
import { PropertyTitleComponent } from '@shared/components/property/property-title/property-title.component';

@Component({
    selector: 'app-user-personal-data',
    imports: [
        TranslatePipe,
        PropertyComponent,
        PropertyTitleComponent,
        PropertyValueComponent,
    ],
    templateUrl: './user-personal-data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalDataComponent {
    user = input.required<UnsplashUser>();
}
