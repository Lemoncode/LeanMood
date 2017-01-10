import * as React from "react";
import {Link} from "react-router";

interface IProps extends React.Props<EvaluationPage> {
}

// <Link to="/students/training">Go to students</Link>
// <Link to="/students/training">Go to trainings</Link>
export class EvaluationPage extends React.Component<IProps, {}> {
   public render() {
       return (
         <div>
           <span>--- Evaluation page: </span>
           <br/>
           <br/>
           <Link to="/trainers/dashboard">Go back to dashboard</Link>
         </div>
        );
  }
}
