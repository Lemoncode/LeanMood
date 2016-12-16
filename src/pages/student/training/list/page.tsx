import * as React from 'react';
import {Link} from 'react-router';


export class TrainingListPage extends React.Component<{}, {}> {
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
