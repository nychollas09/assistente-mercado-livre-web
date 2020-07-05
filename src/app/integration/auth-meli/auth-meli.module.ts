import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMeliComponent } from './auth-meli.component';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { AuthMeliRoutingModule } from './auth-meli.routing';

@NgModule({
  declarations: [AuthMeliComponent],
  imports: [CommonModule, SpinnerModule, AuthMeliRoutingModule],
})
export class AuthMeliModule {}
