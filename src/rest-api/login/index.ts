import * as apiDouble from './loginAPI.double';
import * as apiReal from './loginAPI.real';
import { LoginFunction, GetCookie } from './loginAPI.contract';
import { config } from '../config';

export const login: LoginFunction = (config.useRealAPI) ?
  apiReal.login :
  apiDouble.login;

export const getCookie: GetCookie = (config.useRealAPI) ?
  apiReal.getCookie :
  apiDouble.getCookie;
