import { Routes } from '@angular/router';
import { imageResolver } from './resolver/image.resolver';
import { HttpErrorHandlerService } from '@core/services/error/http-error-handler.service';
import { ImageHttpErrorHandlerService } from './services/http/image-http-error-handler.service';

export const IMAGES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./images.component').then(x => x.ImagesComponent),
        data: {
            breadcrumb: 'BREADCRUMB.IMAGES',
        },
        providers: [
            {
                provide: HttpErrorHandlerService,
                useClass: ImageHttpErrorHandlerService,
            },
        ],
        children: [
            {
                path: ':id',
                loadComponent: () =>
                    import('./detail/detail.component').then(
                        x => x.DetailComponent
                    ),
                resolve: {
                    image: imageResolver,
                },
            },
            {
                path: '',
                loadComponent: () =>
                    import(
                        './list-view/image-page-view/image-page-view.component'
                    ).then(x => x.ImagePageViewComponent),
            },
        ],
    },
];
