import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistenteComponent } from './assistente.component';
import { AuthService } from 'src/app/service/auth.service';

@NgModule({
  declarations: [AssistenteComponent],
  exports: [AssistenteComponent],
  imports: [CommonModule],
  providers: [AuthService],
})
export class AssistenteModule {}
