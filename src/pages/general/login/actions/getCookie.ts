import * as toastr from 'toastr';
import { getCookie } from '../../../../rest-api/login';

export const getCookieAction = () => (dispatch) => {
  getCookie()
    .then((cookie) => toastr.success(cookie));
};
