import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<div [class]="aditionalClass + ' container px-3 mx-auto'">
    <ng-content></ng-content>
  </div> `,
})
export class ContainerComponent {
  @Input() public aditionalClass: string;
}
