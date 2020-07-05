import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedMeliComponent } from './authenticated-meli.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedMeliComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedMeliRoutingModule {}
