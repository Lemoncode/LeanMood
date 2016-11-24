import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<LoginPage> {
}


export class LoginPage extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <span> Login: </span>
             <br/>
             <span> Up and running:</span><Link to="/admin">Go to admin MODULE</Link>
             <br/>
             <span>*****</span>
             <br/>
             <Link to="/nonexistingpage">Navigate to a 404 page.</Link>
             <br/>
             <Link to="/students">Go to students MODULE</Link>
             <br/>
             <Link to="/trainers">Go to trainers MODULE</Link>
             <br/>

          </div>
       );
  }
}
