import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthMeliComponent } from './auth-meli.component';

const routes: Routes = [
  {
    path: '',
    component: AuthMeliComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthMeliRoutingModule {}
