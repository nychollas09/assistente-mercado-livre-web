import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnumMainRoute } from './domain/enums/enum-main-route';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: EnumMainRoute.HOME,
  },
  {
    path: EnumMainRoute.HOME,
    loadChildren: () =>
      import('./pages/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: EnumMainRoute.AUTH_MELI,
    loadChildren: () =>
      import('./integration/auth-meli/auth-meli.module').then(
        (module) => module.AuthMeliModule,
      ),
  },
  {
    path: EnumMainRoute.AUTHENTICATED_MELI,
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./pages/authenticated-meli/authenticated-meli.module').then(
        (module) => module.AuthenticatedMeliModule,
      ),
  },
  { path: EnumMainRoute.WILDCART, redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
