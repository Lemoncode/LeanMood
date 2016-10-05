import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<Trainers> {
}


export default class Trainers extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Trainers page: </span>
           <br/>
           <Link to="/home">Go to home page</Link>
         </div>
        );
  }
}
