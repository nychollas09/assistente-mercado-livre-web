import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { ContainerModule } from '../container/container.module';
import { AuthService } from 'src/app/service/auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, ContainerModule],
  exports: [NavbarComponent],
  providers: [AuthService],
})
export class NavbarModule {}
