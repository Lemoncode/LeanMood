import * as React from 'react';
import {Link} from 'react-router';
import { StudentSummary } from '../../../../model/studentSummary'
import { StudentTableComponent } from './components/studentTable'

interface Props extends React.Props<ListStudentPage> {
  studentList : StudentSummary[];
  fetchStudents : () => void;
}


//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class ListStudentPage extends React.Component<Props, {}> {
   componentDidMount() {
     this.props.fetchStudents();
   }

   public render() {
       return (
         <div>
          <StudentTableComponent studentList={this.props.studentList}/>
           <Link to="/admin/student/edit">Go to student Edit</Link>
         </div>
        );
    }
}
