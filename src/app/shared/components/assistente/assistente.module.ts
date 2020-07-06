import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistenteComponent } from './assistente.component';

@NgModule({
  declarations: [AssistenteComponent],
  exports: [AssistenteComponent],
  imports: [CommonModule],
})
export class AssistenteModule {}
