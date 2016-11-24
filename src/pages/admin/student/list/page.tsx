import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<ListStudentPage> {
}


//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class ListStudentPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> List Student Page: </span>
           <br/>
           <br/>
           <Link to="/admin/student/edit">Go to student Edit</Link>
         </div>
        );
  }
}
