import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<Home> {
}


export class Home extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <span> Home page: </span>
             <Link to="/students">Go to students page</Link>
          </div>
       );
  }
}
