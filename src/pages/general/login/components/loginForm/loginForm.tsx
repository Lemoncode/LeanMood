import * as React from 'react';
import {LoginCredentials} from '../../../../../model/loginCredentials';

interface IProps {
    loginCredentials: LoginCredentials;
    updateLoginInfo: (loginCredentials: LoginCredentials) => void;
    loginRequest: (loginCredentials: LoginCredentials) => void;
}

export const LoginFormComponent = (props: IProps) => {
    return(
        <div className="panel-body">
          <form role="form">
            <fieldset>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="E-mail"
                  name="email"
                  type="text"
                  value={props.loginCredentials.login}
                  onChange={(e : any) => props.updateLoginInfo({login: e.target.value, password: props.loginCredentials.password })}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={props.loginCredentials.password}
                  onChange={(e : any) => props.updateLoginInfo({login: props.loginCredentials.login, password: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-success btn-block"
                onClick={() => props.loginRequest(props.loginCredentials)}
              >
                Login
              </button>
          </fieldset>
        </form>
      </div>
    );
};