import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/services-list/services-list.component').then(
        (mod) => mod.ServicesListComponent
      ),
  },
  {
    path: 'service-details/:id',
    loadComponent: () =>
      import('./components/service-details/service-details.component').then(
        (mod) => mod.ServiceDetailsComponent
      ),
  },
  {
    path: 'booking/:id',
    loadComponent: () =>
      import('./components/booking-form/booking-form.component').then(
        (mod) => mod.BookingFormComponent
      ),
  },
];
