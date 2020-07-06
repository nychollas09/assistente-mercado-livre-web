import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssistenteModule } from 'src/app/shared/components/assistente/assistente.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { AuthenticatedMeliComponent } from './authenticated-meli.component';
import { AuthenticatedMeliRoutingModule } from './authenticated-meli.routing';

@NgModule({
  declarations: [AuthenticatedMeliComponent],
  imports: [
    CommonModule,
    NavbarModule,
    AssistenteModule,
    AuthenticatedMeliRoutingModule,
  ],
})
export class AuthenticatedMeliModule {}
