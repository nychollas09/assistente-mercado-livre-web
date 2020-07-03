import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs/internal/Observable';
import { ObservableUtil } from '../shared/utils/observable-util';
import { AuthenticateInformation } from '../domain/interfaces/authenticate-information';
import { AuthenticatedInformation } from '../domain/models/authenticated-information';
import { environment } from '../environments/environment';
import { RequestUtil } from '../shared/utils/request-util';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthenticationMeliError } from '../domain/interfaces/authentication-meli-error';
import { EnumHttpStatus } from '../domain/enums/enum-http-status';
import { useHistory } from 'react-router-dom';
import { EnumMainRoute } from 'src/domain/enums/enum-main-route';

const REFERENCE_INVALID_GRANT_ERROR = 'invalid_grant';

export function ApiAuthMeli$(
  code: string,
): Observable<AuthenticatedInformation> {
  const history = useHistory();

  const authenticateInformation: AuthenticateInformation = {
    client_id: environment.clientIdAuthMeli,
    client_secret: environment.secretKeyAuthMeli,
    code,
    grant_type: 'authorization_code',
    redirect_uri: environment.redirectUri,
  };

  return ajax
    .post(
      `${
        environment.apiMercadoLivre
      }/oauth/token?${RequestUtil.objectToRequestParam(
        authenticateInformation,
      )}`,
    )
    .pipe(
      map((ajaxResponse) => ajaxResponse.response),
      ObservableUtil.instaceResultObject(AuthenticatedInformation),
      catchError(({ response }: { response: AuthenticationMeliError }) => {
        if (
          response.status === EnumHttpStatus.BAD_REQUEST &&
          response.error.includes(REFERENCE_INVALID_GRANT_ERROR)
        ) {
          history.push(EnumMainRoute.AUTH_MELI);
        }
        return of(response);
      }),
    );
}
