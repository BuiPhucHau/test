import { LayoutComponent } from './layout.component';

import { Routes } from '@angular/router';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            redirectTo: 'base/home',
            pathMatch: 'full',
        },
        {
            path: 'base/home',
            loadChildren: () =>
              import('../layout/home/home.routes').then((m) => m.HOME_ROUTERS),
        },
        {
            path: 'base/booking',
            loadChildren: () =>
                import('./booking/booking.routes').then((m) => m.BOOKING_ROUTERS),
        },
        {
          path: 'base/menu',
          loadChildren: () =>
            import('./menu/menu.routes').then((m) => m.MENU_ROUTERS),
        },
        {
          path: 'base/order',
          loadChildren: () =>
            import('./order/order.routes').then((m) => m.ORDER_ROUTERS),
        },
        {
          path: 'base/location',
          loadChildren: () =>
            import('./location/location.routes').then((m) => m.LOCATION_ROUTES),
        }
        
    ]
  },
];