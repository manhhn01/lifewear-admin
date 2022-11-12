export interface LoginForm extends LoginQueryParams {}

export interface LoginQueryParams {
  email: string;
  password: string;
}

export interface LoginQueryResponse {
  token: string;
}
