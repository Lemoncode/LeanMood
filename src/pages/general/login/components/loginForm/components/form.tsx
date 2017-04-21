import * as React from 'react';
import { LoginCredentials } from '../../../../../../model/login/loginCredentials';
import { ILoginErrors } from '../../../../../../model/login/loginErrors';
import { InputComponent } from '../../../../../../common/components/form';

interface Props {
  loginCredentials: LoginCredentials;
  loginErrors: ILoginErrors;
  updateLoginInfo: (viewModel: LoginCredentials, fieldName: string, value: string) => void;
  loginRequest: (loginCredentials: LoginCredentials) => void;
}

const updateLoginInfo = (props: Props) => (event) => {
  const fieldName = event.target.name;
  const value = event.target.value;
  props.updateLoginInfo(props.loginCredentials, fieldName, value);
};

const loginRequest = (props) => (event) => {
  event.preventDefault();
  props.loginRequest(props.loginCredentials);
};

export const FormComponent = (props: Props) => {
  return (
    <div className="panel-body">
      <form role="form">
        <InputComponent
          type="text"
          label="E-mail"
          placeholder="E-mail"
          name="login"
          value={props.loginCredentials.login}
          onChange={updateLoginInfo(props)}
          error={props.loginErrors.login.succeeded ? '' : props.loginErrors.login.errorMessage}
        />
        <InputComponent
          type="password"
          label="Password"
          placeholder="Password"
          name="password"
          value={props.loginCredentials.password}
          onChange={updateLoginInfo(props)}
          error={props.loginErrors.password.succeeded ? '' : props.loginErrors.password.errorMessage}
        />
        <button
          type="submit"
          className="btn btn-lg btn-success btn-block"
          onClick={loginRequest(props)}
        >
          Login
        </button>
      </form>
    </div>
  );
};
