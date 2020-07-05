export interface AuthenticateInformation {
  client_id: number;
  client_secret: string;
  code: string;
  grant_type: 'authorization_code';
  redirect_uri?: string;
}
