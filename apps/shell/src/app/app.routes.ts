import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { AuthGuard } from '@auth-lib/shared/auth';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      loadRemoteModule('users', './Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuard],
    data: { roles: ["manage-users"] }
  },
  {
    path: 'tenants',
    loadChildren: () =>
      loadRemoteModule('tenants', './Module').then((m) => m.RemoteEntryModule),
    canActivate: [AuthGuard],
    data: { roles: ["manage-tenants"] }
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
