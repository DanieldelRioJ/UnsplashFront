import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashUser } from '../../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { MatTooltip } from '@angular/material/tooltip';
import { PropertyComponent } from '@shared/components/property/property.component';
import { PropertyTitleComponent } from '@shared/components/property/property-title/property-title.component';
import { PropertyValueComponent } from '@shared/components/property/property-value/property-value.component';

@Component({
    selector: 'app-user-stats',
    imports: [
        MatIcon,
        MatTooltip,
        TranslatePipe,
        PropertyComponent,
        PropertyTitleComponent,
        PropertyValueComponent,
    ],
    templateUrl: './user-stats.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatsComponent {
    user = input.required<UnsplashUser>();
}
