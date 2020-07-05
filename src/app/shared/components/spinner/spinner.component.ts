import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div className="h-full flex items-center justify-center">
    <div className="loader"></div>
  </div>`,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {}
