export const pagePaths = {

    // Default
    Empty: '',
    redirect: '/',
    full: 'full' as const,

    // Auth
    home: 'home',
    about:'about',
    services:'services',
    services_view:'view-services',
    countries:'countries',
    countries_view:'view-countries',
    blog:'blog',
    blog_view:'blog-view',
    contact:'contact',

    // other 
    star: '**',
    pageNot_found: 'page-not-found',
   
}
export const RoutePath = {
    ...pagePaths,
}
