import * as React from "react";
import {Link} from "react-router";

interface IProps extends React.Props<DashboardPage> {
}

// <Link to="/students/training">Go to students</Link>
// <Link to="/students/training">Go to trainings</Link>
export class DashboardPage extends React.Component<IProps, {}> {
   public render() {
       return (
         <div>
           <span> Dashboard page: </span>
           <br/>
           <br/>
           <Link to="/trainers/evaluation">Go to student evaluation</Link>
           <Link to="/trainers/">Go back to training</Link>
         </div>
        );
  }
}
