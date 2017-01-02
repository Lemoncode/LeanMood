import * as React from "react";
import {Link} from "react-router";

interface IProps extends React.Props<LoginPage> {
}

export class LoginPage extends React.Component<IProps, {}> {
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
             <br/>
             <span> Navigation Skeleton:</span><Link to="/trainers">Go to trainers MODULE</Link>
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
