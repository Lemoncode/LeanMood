import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<EditStudentPage> {
}


//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class EditStudentPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Edit Student Page: </span>
           <br/>
           <br/>
         </div>
        );
  }
}
