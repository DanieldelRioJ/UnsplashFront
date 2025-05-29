import {
    ChangeDetectionStrategy,
    Component,
    input,
    signal,
} from '@angular/core';
import { UnsplashImage } from '../../../services/http/unsplash-image.types';
import { SkeletonImageLoadingComponent } from '@shared/components/skeleton-image-loading/skeleton-image-loading.component';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { UnsplashImageDownloadDirective } from '@shared/directive/image-download/unsplash-image-download.directive';

@Component({
    selector: 'app-image-item',
    imports: [
        SkeletonImageLoadingComponent,
        MatIcon,
        DatePipe,
        UnsplashImageDownloadDirective,
    ],
    templateUrl: './image-item.component.html',
    styleUrl: './image-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageItemComponent {
    image = input.required<UnsplashImage>();
    loading = signal(true);
}
