import * as React from 'react';
import {LoginCredentials} from '../../../../../model/login/loginCredentials';
import {HeaderComponent} from './components/header';
import {FormComponent} from './components/form';

interface IProps {
  loginCredentials: LoginCredentials;
  updateLoginInfo: (loginCredentials: LoginCredentials) => void;
  loginRequest: (loginCredentials: LoginCredentials) => void;
}

export const LoginFormComponent = (props: IProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <HeaderComponent />
            <FormComponent
              loginCredentials={props.loginCredentials}
              updateLoginInfo={props.updateLoginInfo}
              loginRequest={props.loginRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
