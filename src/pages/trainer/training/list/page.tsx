import * as React from "react";
import {Link} from "react-router";

interface IProps extends React.Props<TrainingListPage> {
}

// <Link to="/students/training">Go to students</Link>
// <Link to="/students/training">Go to trainings</Link>
export class TrainingListPage extends React.Component<IProps, {}> {
   public render() {
       return (
         <div>
           <span> Choose training from training list (this page will be skipe if only one training): </span>
           <br/>
           <br/>
           <Link to="/trainers/dashboard">Go dashboard</Link>
         </div>
        );
  }
}
