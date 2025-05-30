import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashImageTag } from '../../../services/http/unsplash-image.types';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { IMAGES_ROUTE } from 'app/app.routes';

@Component({
    selector: 'app-image-tags',
    imports: [MatChipSet, MatChip, RouterLink],
    templateUrl: './image-tags.component.html',
    styleUrl: './image-tags.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageTagsComponent {
    IMAGES_ROUTE = IMAGES_ROUTE;
    tags = input<UnsplashImageTag[]>();
}
