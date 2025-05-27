import { Routes } from '@angular/router';

export const IMAGES_ROUTE = 'images';

export const routes: Routes = [
    {
        path: IMAGES_ROUTE,
        loadChildren: () =>
            import('./features/images/images.route').then(x => x.IMAGES_ROUTES),
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
