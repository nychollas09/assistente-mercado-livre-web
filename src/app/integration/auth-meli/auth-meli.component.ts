import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth-meli',
  template: `<div className="flex flex-1 justify-center h-full">
    <app-spinner></app-spinner>
  </div>`,
})
export class AuthMeliComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = `http://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${environment.clientIdAuthMeli}`;
  }
}
