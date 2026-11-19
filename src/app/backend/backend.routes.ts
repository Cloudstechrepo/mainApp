import { Routes } from '@angular/router';
import { BackendLayoutComponent } from './backend-layout.component';

export const BACKEND_ROUTES: Routes = [
    {
        path: 'dashboard',
        component: BackendLayoutComponent,
        children: [
            // {
            //     path: '',
            //     pathMatch: 'full',
            //     loadComponent: () =>
            //         import('./admin-panel/dashboard/dashboard')
            //             .then(m => m.Dashboard)
            // },
            // {
            //     path: 'users',
            //     loadComponent: () =>
            //         import('./admin-panel/users/users')
            //             .then(m => m.Users)
            // },
            // {
            //     path: 'products',
            //     loadComponent: () =>
            //         import('./admin-panel/products/products')
            //             .then(m => m.Products)
            // }
        ]
    }
];