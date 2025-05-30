import {
    ChangeDetectionStrategy,
    Component,
    input,
    signal,
} from '@angular/core';
import { UnsplashImage } from '../../services/http/unsplash-image.types';
import { SkeletonImageLoadingComponent } from '@shared/components/skeleton-image-loading/skeleton-image-loading.component';

@Component({
    selector: 'app-detail-image',
    imports: [SkeletonImageLoadingComponent],
    templateUrl: './detail-image.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailImageComponent {
    image = input.required<UnsplashImage | null>();
    loading = signal(true);
}
