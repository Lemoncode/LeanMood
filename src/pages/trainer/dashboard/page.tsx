import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<DashboardPage> {
}


//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class DashboardPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Dashboard page: </span>
           <br/>
           <br/>
           <Link to="/training/">Go back to training</Link>
         </div>
        );
  }
}
