import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UnsplashImage } from '../services/http/unsplash-image.types';
import { GoBackDirective } from '@shared/directive/go-back/go-back.directive';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-detail',
    imports: [
        DetailImageComponent,
        AsyncPipe,
        GoBackDirective,
        MatButton,
        MatIcon,
    ],
    templateUrl: './detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
    image$: Observable<UnsplashImage>;

    constructor(private readonly _activatedRoute: ActivatedRoute) {
        this.image$ = this._activatedRoute.data.pipe(
            map(data => data['image'])
        );
    }
}
