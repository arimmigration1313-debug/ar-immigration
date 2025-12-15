import { RoutePath } from './router.config';

export const pagesRoutes = [
    {
    path: RoutePath.home,
    loadComponent: () =>
        import('../../pages/home/home.component').then(
        (m) => m.HomeComponent
        ),
    },
    {
    path: RoutePath.about,
    loadComponent: () =>
        import('../../pages/about/about.component').then(
        (m) => m.AboutComponent
        ),
    },
     {
    path: RoutePath.services,
    loadComponent: () =>
        import('../../pages/services/services.component').then(
        (m) => m.ServicesComponent
        ),
    },

    {
    path:RoutePath.services + '/' + RoutePath.services_view + '/:id',
    loadComponent: () =>
        import('../../pages/services/view-service/view-service.component').then(
        (m) => m.ViewServiceComponent
        ),
    },

    {
    path: RoutePath.countries,
    loadComponent: () =>
        import('../../pages/countries/countries.component').then(
        (m) => m.CountriesComponent
        ),
    },

    {
    path:RoutePath.countries + '/' + RoutePath.countries_view + '/:id',
    loadComponent: () =>
        import('../../pages/countries/view-countries/view-countries.component').then(
        (m) => m.ViewCountriesComponent
        ),
    },

    {
    path: RoutePath.blog,
    loadComponent: () =>
        import('../../pages/blog/blog.component').then(
        (m) => m.BlogComponent
        ),
    },
     {
     path:RoutePath.blog + '/' + RoutePath.blog_view + '/:id',
    loadComponent: () =>
        import('../../pages/blog/view-blog/view-blog.component').then(
        (m) => m.ViewBlogComponent
        ),
    },
     {
    path: RoutePath.contact,
    loadComponent: () =>
        import('../../pages/contact/contact.component').then(
        (m) => m.ContactComponent
        ),
    },
   
]