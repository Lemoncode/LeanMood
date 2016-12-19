import * as React from 'react';
import {Link} from 'react-router';
import { LoginCredentials } from '../../../model/loginCredentials';
import { LoginFormComponent } from './components/loginForm';
import { CenteredContainer } from '../../../common/components/centered';

interface Props extends React.Props<LoginPage> {
  loginCredentials: LoginCredentials,
  updateLoginInfo: (loginCredentials:LoginCredentials) => void;
  performLogin: () => void;
}


export class LoginPage extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <CenteredContainer>
              <LoginFormComponent loginCredentials={{login:'prueba', password:'2'}} performLogin={ this.props.performLogin } updateLoginInfo={ this.props.updateLoginInfo }/>
            </CenteredContainer>
            <footer className="footer">
              <span> Login: </span>
              <br/>
              <span> Navigation Skeleton:</span><Link to="/admin">Go to admin MODULE</Link>
              <br/>
              <span> Navigation Skeleton:</span><Link to="/students">Go to students MODULE</Link>
              <span>*****</span>
              <br/>
              <br/>
              <span> Navigation Skeleton:</span><Link to="/trainers">Go to trainers MODULE</Link>
              <span>*****</span>
              <br/>
              <Link to="/nonexistingpage">Navigate to a 404 page.</Link>
              <br/>
              <br/>
              <span> PENDING Trainers module navigation, any volunteer?</span>
              <br/>
            </footer>
          </div>
       );
  }
}
