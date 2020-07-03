export class AuthenticatedInformation {
  public access_token: string;
  public token_type: string;
  public expires_in: number;
  public scope: string;
  public user_id: number;
  public refresh_token: string;

  constructor(init?: Partial<AuthenticatedInformation>) {
    Object.assign(this, init);
  }

  public get expiresInAsDate(): Date {
    return new Date(this.expires_in);
  }

  public get scopeAsArray(): string[] {
    return this.scope.split(' ');
  }
}
