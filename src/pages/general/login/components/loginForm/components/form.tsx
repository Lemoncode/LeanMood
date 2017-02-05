import * as React from 'react';
import {LoginCredentials} from '../../../../../../model/login/loginCredentials';
import {InputComponent} from '../../../../../../common/components/form';

interface IProps {
  loginCredentials: LoginCredentials;
  updateLoginInfo: (viewModel: LoginCredentials, fieldName: string, value: string) => void;
  loginRequest: (loginCredentials: LoginCredentials) => void;
}

export const FormComponent = (props: IProps) => {
  const updateLoginInfo = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    props.updateLoginInfo(props.loginCredentials, fieldName, value);
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
          name="login"
          value={props.loginCredentials.login}
          onChange={updateLoginInfo.bind(this)}
        />
        <InputComponent
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          value={props.loginCredentials.password}
          onChange={updateLoginInfo.bind(this)}
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
