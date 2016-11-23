import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<TrainingPage> {
}


export class TrainingPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> ****** Training List: </span>
           <br/>
           <br/>
           <Link to="/home">Go to home page</Link>
         </div>
        );
  }
}
