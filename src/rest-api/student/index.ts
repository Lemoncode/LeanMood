import * as apiDouble from './studentAPI.double';
import * as apiReal from './studentAPI.real';
import { config } from '../config';

export const studentAPI = (config.useRealAPI) ?
  apiReal :
  apiDouble;
