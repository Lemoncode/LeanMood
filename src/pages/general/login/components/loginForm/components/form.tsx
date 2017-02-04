import * as React from 'react';
import {LoginCredentials} from '../../../../../../model/loginCredentials';
import {InputComponent} from '../../../../../../common/components/form';

interface IProps {
  loginCredentials: LoginCredentials;
  updateLoginInfo: (loginCredentials: LoginCredentials) => void;
  loginRequest: (loginCredentials: LoginCredentials) => void;
}

export const FormComponent = (props: IProps) => {
  const updateLogin = (e) => {
    const login = e.target.value;
    props.updateLoginInfo({
      login,
      password: props.loginCredentials.password,
    });
  };

  const updatePassword = (e) => {
    const password = e.target.value;
    props.updateLoginInfo({
      login: props.loginCredentials.login,
      password,
    });
  };

  const loginRequest = (e) => {
    e.preventDefault();
    props.loginRequest(props.loginCredentials);
  };

  return (
    <div className="panel-body">
      <form role="form">
        <InputComponent
          type="text"
          label="E-mail"
          placeholder="E-mail"
          name="email"
          value={props.loginCredentials.login}
          onChange={updateLogin.bind(this)}
        />
        <InputComponent
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          value={props.loginCredentials.password}
          onChange={updatePassword.bind(this)}
        />
        <button
          type="submit"
          className="btn btn-lg btn-success btn-block"
          onClick={loginRequest.bind(this)}
        >
          Login
        </button>
      </form>
    </div>
  );
};
