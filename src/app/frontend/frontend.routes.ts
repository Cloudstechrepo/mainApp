import { Routes } from '@angular/router';
import { FrontendLayoutComponent } from './frontend-layout.component';

export const FRONTEND_ROUTES: Routes = [
    {
        path: '',
        component: FrontendLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () =>
                    import('./components/landing-page/landing-page')
                        .then(m => m.LandingPage)
            },
            {
                path: 'about-us',
                loadComponent: () =>
                    import('./components/pages/about/about.component')
                        .then(m => m.AboutComponent)
            },
            {
                path: 'vision',
                loadComponent: () =>
                    import('./components/pages/vision/vision.component')
                        .then(m => m.VisionComponent)
            },
            {
                path: 'mission',
                loadComponent: () =>
                    import('./components/pages/mission/mission.component')
                        .then(m => m.MissionComponent)
            },
            {
                path: 'our-products',
                loadComponent: () =>
                    import('./components/pages/our-products/our-products.component')
                        .then(m => m.OurProductsComponent)
            },
            {
                path: 'productDetails/:slug',
                loadComponent: () =>
                    import('./components/pages/product-details/product-details.component')
                        .then(m => m.ProductDetailsComponent)
            },
            {
                path: 'careers',
                loadComponent: () =>
                    import('./components/pages/career/career.component')
                        .then(m => m.CareerComponent)
            },
            {
                path: 'contactus',
                loadComponent: () =>
                    import('./components/pages/contact-us/contact-us.component')
                        .then(m => m.ContactUsComponent)
            }
        ]
    }
];