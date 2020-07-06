import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { HomeRoutingModule } from './home.routing';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { AssistenteModule } from 'src/app/shared/components/assistente/assistente.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ContainerModule,
    AssistenteModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
