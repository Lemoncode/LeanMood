import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<TrainingsPage> {
}


export class TrainingsPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span>** Student list of Trainings Page: </span>
           <br/>
           <br/>
           <Link to="/students/maintoc/">Go to training main toc</Link>           
         </div>
        );
  }
}
