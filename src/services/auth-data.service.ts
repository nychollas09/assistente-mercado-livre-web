import { AuthenticatedInformation } from 'src/domain/models/authenticated-information';

export class AuthDataService {
  public static authenticatedInformation: AuthenticatedInformation;

  public static get user_id(): number {
    return AuthDataService.authenticatedInformation.user_id;
  }
}
