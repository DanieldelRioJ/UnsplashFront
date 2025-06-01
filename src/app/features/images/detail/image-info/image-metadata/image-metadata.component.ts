import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashImageDetailed } from '../../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { PropertyComponent } from '@shared/components/property/property.component';
import { PropertyTitleComponent } from '@shared/components/property/property-title/property-title.component';
import { PropertyValueComponent } from '@shared/components/property/property-value/property-value.component';

@Component({
    selector: 'app-image-metadata',
    imports: [
        MatIcon,
        TranslatePipe,
        PropertyComponent,
        PropertyTitleComponent,
        PropertyValueComponent,
    ],
    templateUrl: './image-metadata.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageMetadataComponent {
    image = input.required<UnsplashImageDetailed>();
}
