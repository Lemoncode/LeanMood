import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<Training> {
}


export class Training extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Single Training page: </span>
           <br/>
           <br/>
           <Link to="/home">Go to home page</Link>
         </div>
        );
  }
}
