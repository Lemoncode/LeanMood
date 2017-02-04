import * as React from 'react';
import {LoginCredentials} from '../../../../../../model/loginCredentials';
import {InputComponent} from '../../../../../../common/components/form';

interface IProps {
  loginCredentials: LoginCredentials;
  updateLoginInfo: (loginCredentials: LoginCredentials) => void;
  loginRequest: (loginCredentials: LoginCredentials) => void;
}

export const FormComponent = (props: IProps) => {
  return (
    <div className="panel-body">
      <form role="form">
        <div className="form-group">
          <InputComponent
            type="text"
            label="E-mail"
            placeholder="E-mail"
            name="email"
            value={props.loginCredentials.login}
            onChange={(e : any) => props.updateLoginInfo({login: e.target.value, password: props.loginCredentials.password })}
          />
        </div>
        <div className="form-group">
          <InputComponent
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            value={props.loginCredentials.login}
            onChange={(e : any) => props.updateLoginInfo({login: e.target.value, password: props.loginCredentials.password })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success btn-block"
          onClick={() => props.loginRequest(props.loginCredentials)}
        >
          Login
        </button>
      </form>
    </div>
  );
};
