import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '@core/components/breadcrumb/breadcrumb.component';
import { RouterWithFadeAnimationComponent } from '@shared/components/router-with-fade-animation/router-with-fade-animation.component';

@Component({
    selector: 'app-images',
    imports: [BreadcrumbComponent, RouterWithFadeAnimationComponent],
    templateUrl: './images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent {}
