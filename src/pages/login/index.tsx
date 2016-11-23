import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<Login> {
}


export class Login extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <span> Login: </span>
             <Link to="/students">Go to students MODULE</Link>
             <br/>
             <Link to="/trainers">Go to trainers MODULE</Link>
             <br/>
             <Link to="/admin">Go to admin MODULE</Link>
          </div>
       );
  }
}
