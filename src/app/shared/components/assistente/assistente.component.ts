import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistente',
  templateUrl: './assistente.component.html',
  styleUrls: ['./assistente.component.scss'],
})
export class AssistenteComponent implements OnInit {
  public showMelia = false;

  constructor() {}

  ngOnInit(): void {}

  public handleShowMelia(): void {
    this.showMelia = true;
  }
}
