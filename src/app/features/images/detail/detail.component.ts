import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UnsplashImageDetailed } from '../services/http/unsplash-image.types';
import { GoBackDirective } from '@shared/directive/go-back/go-back.directive';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatAccordion } from '@angular/material/expansion';
import { UserInfoComponent } from './user-info/user-info.component';
import { ImageInfoComponent } from './image-info/image-info.component';

@Component({
    selector: 'app-detail',
    imports: [
        DetailImageComponent,
        AsyncPipe,
        GoBackDirective,
        MatButton,
        MatIcon,
        MatAccordion,
        UserInfoComponent,
        ImageInfoComponent,
    ],
    templateUrl: './detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
    image$: Observable<UnsplashImageDetailed>;

    constructor(private readonly _activatedRoute: ActivatedRoute) {
        this.image$ = this._activatedRoute.data.pipe(
            map(data => data['image'])
        );
    }
}
