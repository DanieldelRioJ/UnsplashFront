import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { UnsplashImageDetailed } from '../../services/http/unsplash-image.types';
import { MatIcon } from '@angular/material/icon';
import { ImageTagsComponent } from './image-tags/image-tags.component';
import { ImageMetadataComponent } from './image-metadata/image-metadata.component';

@Component({
    selector: 'app-image-info',
    imports: [
        MatExpansionModule,
        MatIcon,
        ImageTagsComponent,
        ImageMetadataComponent,
    ],
    templateUrl: './image-info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageInfoComponent {
    image = input.required<UnsplashImageDetailed>();
}
