import * as apiDouble from './loginAPI.double';
import * as apiReal from './loginAPI.real';
import { LoginFunction } from './loginAPI.contract';
import { config } from '../config';

export const login: LoginFunction = (config.useRealAPI) ?
  apiReal.login :
  apiDouble.login;
