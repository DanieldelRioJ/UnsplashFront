import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashImageDetailed } from '../../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-image-metadata',
    imports: [MatIcon],
    templateUrl: './image-metadata.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageMetadataComponent {
    image = input.required<UnsplashImageDetailed>();
}
