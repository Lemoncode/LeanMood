import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<DashboardPage> {
}


export class DashboardPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Students dashboard: </span>
           <br/>
           <br/>
           <Link to="/students/training">Go to students</Link>
           <Link to="/students/training">Go to trainings</Link>
         </div>
        );
  }
}
