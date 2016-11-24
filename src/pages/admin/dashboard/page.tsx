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
           <span> ADMIN dashboard: </span>
           <br/>
           <br/>
           <Link to="/admin/student/list">Go to student list</Link>
           <Link to="/admin/training/list">Go to training list</Link>
         </div>
        );
  }
}
