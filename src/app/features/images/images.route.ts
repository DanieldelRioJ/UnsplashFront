import { Routes } from '@angular/router';

export const IMAGES_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./images.component').then(x => x.ImagesComponent),
        data: {
            breadcrumb: 'BREADCRUMB.IMAGES',
        },
        children: [
            {
                path: ':id',
                loadComponent: () =>
                    import('./detail/detail.component').then(
                        x => x.DetailComponent
                    ),
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
