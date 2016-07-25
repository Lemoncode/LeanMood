import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<Students> {
}


export default class Students extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Students page: </span>
           <Link to="/home">Go to home page</Link>
         </div>
        );
  }
}
