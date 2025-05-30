import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageAdvancedSearchComponent } from './image-advanced-search/image-advanced-search.component';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { ImageSearchFormService } from './image-search-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UnsplashImageSearchOrderBy } from '../../../services/http/unsplash-image.types';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-image-search',
    imports: [
        ImageAdvancedSearchComponent,
        MatFormField,
        MatLabel,
        MatInput,
        MatSelect,
        MatOption,
        ReactiveFormsModule,
        TranslatePipe,
    ],
    templateUrl: './image-search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSearchComponent {
    form: typeof this._imageSearchFormService.searchForm;
    order_by_options: UnsplashImageSearchOrderBy[] = ['latest', 'relevant'];

    constructor(
        private readonly _imageSearchFormService: ImageSearchFormService
    ) {
        this.form = this._imageSearchFormService.searchForm;
    }
}
