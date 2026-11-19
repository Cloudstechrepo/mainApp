import { Routes } from '@angular/router';

import { FRONTEND_ROUTES } from './frontend/frontend.routes';
import { BACKEND_ROUTES } from './backend/backend.routes';

export const routes: Routes = [
    {
        path: 'admin',
        loadComponent: () =>
            import('./frontend/components/pages/login/login')
                .then(m => m.Login)
    },

    ...FRONTEND_ROUTES,
    ...BACKEND_ROUTES,

    {
        path: '**',
        redirectTo: ''
    }
];