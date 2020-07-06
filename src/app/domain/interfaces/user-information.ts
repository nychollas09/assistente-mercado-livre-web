export interface UserInformation {
  id: number;
  nickname: string;
  first_name: string;
  last_name: string;
  gender: string;
  country_id: string;
  email: string;
  address: { address: string; city: string; state: string; zip_code: string };
}
