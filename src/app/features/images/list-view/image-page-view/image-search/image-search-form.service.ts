import { Injectable } from '@angular/core';
import {
    FormControl,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { UnsplashImageSearchOrderBy } from '../../../services/http/unsplash-image.types';

@Injectable()
export class ImageSearchFormService {
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
        });
    }
}
