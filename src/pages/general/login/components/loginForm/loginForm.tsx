import * as React from 'react';
import {LoginCredentials} from '../../../../../model/login/loginCredentials';
import {ILoginErrors} from '../../../../../model/login/loginErrors';
import {HeaderComponent} from './components/header';
import { FormComponent } from './components/form';
const styles: any = require('./loginForm.styles.scss');

interface IProps {
  loginCredentials: LoginCredentials;
  loginErrors: ILoginErrors;
  updateLoginInfo: (viewModel: LoginCredentials, fieldName: string, value: string) => void;
  loginRequest: (loginCredentials: LoginCredentials) => void;
  test?: () => void; // TODO: Remove this.
}

export const LoginFormComponent = (props: IProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className={`panel panel-default ${styles.formContainer}`}>
            <HeaderComponent />
            <FormComponent
              loginCredentials={props.loginCredentials}
              updateLoginInfo={props.updateLoginInfo}
              loginRequest={props.loginRequest}
              loginErrors={props.loginErrors}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <button className="btn btn-default pull-right" onClick={props.test}>
          TEST POST
        </button>
      </div>
    </div>
  );
};
