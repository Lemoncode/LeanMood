import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<DashboardPage> {
}


//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class TrainingListPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Choose training from training list (this page will be skipe if only one training): </span>
           <br/>
           <br/>
         </div>
        );
  }
}
