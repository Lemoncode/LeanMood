import * as React from 'react';
import {Link} from 'react-router';



//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class EditTrainingPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> Edit Training Page: </span>
           <br/>
           <br/>
           <Link to="/admin/training/list">Back to training list</Link>
           <Link to="/admin">Back to Dashboard</Link>

         </div>
        );
  }
}
