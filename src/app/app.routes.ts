import { Routes } from '@angular/router';
import { RoutePath } from './core/config';
import { LayoutComponent } from './pages/layout/layout.component';
import { pagesRoutes } from './core/config/pages-routes';

export const routes: Routes = [
      {
        path: RoutePath.Empty,
        pathMatch: RoutePath.full,
        redirectTo: RoutePath.home,
      },
      {
        path: RoutePath.Empty,
        component: LayoutComponent,
        children: pagesRoutes
      },
       {
        path: RoutePath.pageNot_found,
        loadComponent: () =>
            import('./pages/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent),
      },
      {
          path: '**',
          redirectTo: RoutePath.pageNot_found,
      },
];
