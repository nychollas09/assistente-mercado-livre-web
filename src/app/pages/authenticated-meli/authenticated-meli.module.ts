import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedMeliComponent } from './authenticated-meli.component';
import { AuthenticatedMeliRoutingModule } from './authenticated-meli.routing';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AuthenticatedMeliComponent],
  imports: [CommonModule, NavbarModule, AuthenticatedMeliRoutingModule],
})
export class AuthenticatedMeliModule {}
