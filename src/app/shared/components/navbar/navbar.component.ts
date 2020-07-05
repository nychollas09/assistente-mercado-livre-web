import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { EnumMainRoute } from 'src/app/domain/enums/enum-main-route';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  public handleRedirectLogoMeli(): void {
    this.router.navigate(
      this.authService.authenticatedInformation
        ? [
            EnumMainRoute.AUTHENTICATED_MELI,
            { code: this.authService.authenticatedInformation.code },
          ]
        : [EnumMainRoute.HOME],
    );
  }

  public handleRedirectEntrar(): void {
    this.router.navigate([EnumMainRoute.AUTH_MELI]);
  }

  public get isAuthenticated(): boolean {
    return !!this.authService.authenticatedInformation;
  }
}
