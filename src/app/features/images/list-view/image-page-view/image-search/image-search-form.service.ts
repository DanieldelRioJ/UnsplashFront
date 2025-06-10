import { Injectable } from '@angular/core';
import {
    FormControl,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import {
    UnsplashImageSearchColor,
    UnsplashImageSearchContentFilter,
    UnsplashImageSearchOrderBy,
    UnsplashImageSearchOrientation,
} from '../../../services/http/unsplash-image.types';

@Injectable()
export class ImageSearchFormService {
    // TODO por que non o creas directamente?
    readonly searchForm: ReturnType<typeof this._createForm>;

    constructor(private readonly _fb: NonNullableFormBuilder) {
        this.searchForm = this._createForm();
    }

    private _createForm() {
        return this._fb.group({
            query: ['', Validators.required],
            order_by: new FormControl<UnsplashImageSearchOrderBy | null>(
                'relevant'
            ),
            color: new FormControl<UnsplashImageSearchColor | null>(null),
            content_filter:
                new FormControl<UnsplashImageSearchContentFilter | null>(null),
            orientation: new FormControl<UnsplashImageSearchOrientation | null>(
                null
            ),
        });
    }
}
