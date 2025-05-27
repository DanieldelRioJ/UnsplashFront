import { Routes } from '@angular/router';

export const IMAGES_ROUTE = 'images';

export const routes: Routes = [
    {
        path: IMAGES_ROUTE,
        loadComponent: () =>
            import(
                './features/images/list-view/image-page-view/image-page-view.component'
            ).then(x => x.ImagePageViewComponent),
    },
    {
        path: '',
        redirectTo: IMAGES_ROUTE,
        pathMatch: 'full',
    },
    {
        path: '**',
        loadComponent: () =>
            import('./features/not-found/not-found.component').then(
                x => x.NotFoundComponent
            ),
    },
];
