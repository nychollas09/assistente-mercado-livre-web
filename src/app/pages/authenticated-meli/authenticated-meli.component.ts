import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticatedInformation } from 'src/app/domain/models/authenticated-information';
import { AuthService } from 'src/app/service/auth.service';

const REFERENCE_CODE_QUERY_PARAM = 'code';

@Component({
  selector: 'app-authenticated-meli',
  templateUrl: './authenticated-meli.component.html',
  styleUrls: ['./authenticated-meli.component.scss'],
})
export class AuthenticatedMeliComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.capturarQueryParams();
  }

  private capturarQueryParams(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.authService
        .getAuthenticatedInformation(paramMap.get(REFERENCE_CODE_QUERY_PARAM))
        .subscribe((authenticatedInformation: AuthenticatedInformation) => {
          if (authenticatedInformation) {
            this.authService.authenticatedInformation = authenticatedInformation;
            this.getUserInformation(authenticatedInformation.access_token);
          }
        });
    });
  }

  private getUserInformation(accessToken: string) {
    this.authService
      .getUserInformation(accessToken)
      .subscribe((userInformation) => {
        this.authService.userInformation = userInformation;
      });
  }
}
