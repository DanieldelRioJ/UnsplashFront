import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageSearchFormService } from '../image-search-form.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import {
    UnsplashImageSearchColor,
    UnsplashImageSearchContentFilter,
    UnsplashImageSearchOrientation,
} from '../../../../services/http/unsplash-image.types';
import { SkeletonImageLoadingComponent } from '@shared/components/skeleton-image-loading/skeleton-image-loading.component';

@Component({
    selector: 'app-image-advanced-search',
    imports: [
        MatExpansionModule,
        TranslatePipe,
        MatIcon,
        MatFormField,
        MatLabel,
        ReactiveFormsModule,
        MatFormField,
        MatSelect,
        MatOption,
        SkeletonImageLoadingComponent,
    ],
    templateUrl: './image-advanced-search.component.html',
    styleUrl: './image-advanced-search.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageAdvancedSearchComponent {
    form: typeof this._imageSearchFormService.searchForm;
    colors: UnsplashImageSearchColor[] = [
        'black_and_white',
        'black',
        'white',
        'yellow',
        'orange',
        'red',
        'purple',
        'magenta',
        'green',
        'teal',
        'blue',
    ];
    content_filters: UnsplashImageSearchContentFilter[] = ['low', 'high'];
    orientations: UnsplashImageSearchOrientation[] = [
        'landscape',
        'portrait',
        'squarish',
    ];

    constructor(
        private readonly _imageSearchFormService: ImageSearchFormService
    ) {
        this.form = this._imageSearchFormService.searchForm;
    }
}
