import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UnsplashImage } from '../../../services/http/unsplash-image.types';
import { ImageItemComponent } from '../image-item/image-item.component';
import { SkeletonImageLoadingComponent } from '@shared/components/skeleton-image-loading/skeleton-image-loading.component';
import { RouterLink } from '@angular/router';
import { EmptySearchPlaceholderComponent } from '@shared/components/empty-search-placeholder/empty-search-placeholder.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-image-grid',
    imports: [
        ImageItemComponent,
        SkeletonImageLoadingComponent,
        RouterLink,
        EmptySearchPlaceholderComponent,
        TranslatePipe,
    ],
    templateUrl: './image-grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGridComponent {
    images = input.required<UnsplashImage[]>();
    loading = input(false);

    readonly emptyArray = Array.from({ length: 30 }, (_, i) => i);
}
