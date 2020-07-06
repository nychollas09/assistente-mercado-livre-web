import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EnumHttpStatus } from '../domain/enums/enum-http-status';
import { EnumMainRoute } from '../domain/enums/enum-main-route';
import { AuthenticateInformation } from '../domain/interfaces/authenticate-information';
import { UserInformation } from '../domain/interfaces/user-information';
import { AuthenticatedInformation } from '../domain/models/authenticated-information';
import { ObservableUtil } from '../shared/utils/observable-util';
import { RequestUtil } from '../shared/utils/request-util';

const REFERENCE_INVALID_GRANT_ERROR = 'invalid_grant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticatedInformation: AuthenticatedInformation;
  private _userInformation: UserInformation;

  public eventChangeUserInformation = new Subject<UserInformation>();

  public set userInformation(userInformation: UserInformation) {
    this.eventChangeUserInformation.next(userInformation);
    this._userInformation = userInformation;
  }

  public get userInformation() {
    return this._userInformation;
  }

  public get user_id(): number {
    return this.authenticatedInformation.user_id;
  }

  constructor(private httpClient: HttpClient, private router: Router) {}

  public getAuthenticatedInformation(
    code: string,
  ): Observable<AuthenticatedInformation> {
    const authenticateInformation: AuthenticateInformation = {
      client_id: environment.clientIdAuthMeli,
      client_secret: environment.secretKeyAuthMeli,
      code,
      grant_type: 'authorization_code',
      redirect_uri: environment.redirectUri,
    };
    return this.httpClient
      .post<AuthenticatedInformation>(
        `${
          environment.apiMercadoLivre
        }/oauth/token?${RequestUtil.objectToRequestParam(
          authenticateInformation,
        )}`,
        undefined,
      )
      .pipe(
        map(
          (authenticatedInformation: AuthenticatedInformation) =>
            new AuthenticatedInformation({ ...authenticatedInformation, code }),
        ),
        ObservableUtil.instaceResultObject(AuthenticatedInformation),
        catchError(({ error: response }: HttpErrorResponse) => {
          this.authenticatedInformation = undefined;
          if (
            response.status === EnumHttpStatus.BAD_REQUEST &&
            response.error.includes(REFERENCE_INVALID_GRANT_ERROR)
          ) {
            this.router.navigate([EnumMainRoute.AUTH_MELI]);
          }
          return undefined;
        }),
      );
  }

  public getUserInformation(accessToken: string): Observable<UserInformation> {
    return this.httpClient.get<UserInformation>(
      `${environment.apiAssistenteMeli}/user/me?access_token=${accessToken}`,
    );
  }
}
