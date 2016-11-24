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
             <span> Navigation Skeleton:</span><Link to="/admin">Go to admin MODULE</Link>
             <br/>
             <span> Navigation Skeleton:</span><Link to="/students">Go to students MODULE</Link>
             <span>*****</span>
             <br/>
             <Link to="/nonexistingpage">Navigate to a 404 page.</Link>
             <br/>
             <br/>
             <span> PENDING Trainers module navigation, any volunteer?</span>
             <br/>

          </div>
       );
  }
}
