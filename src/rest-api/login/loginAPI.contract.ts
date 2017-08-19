import { LoginCredentials } from '../../model/login/loginCredentials';
import { LoginResponse } from '../../model/login/loginResponse';

export type LoginFunction = (loginInfo: LoginCredentials) => Promise<LoginResponse>;
export type GetCookie = () => Promise<string>;
