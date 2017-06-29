import * as React from 'react';
import {Link} from 'react-router';
import {adminRouteEnums} from '../../../../common/routeEnums/admin';
import { StudentSummary } from '../../../../model/studentSummary';

interface Props  {
  student: StudentSummary;
  getstudent : (id: number) => void;
  params? : any;
}

export class EditStudentPage extends React.Component<Props, {}> {
   componentDidMount() {
       const studentId: number = Number(this.props.params.id);
       this.props.getstudent(studentId);
  }

    render() {
       return (
         <div>
             {/*<span>Test, student name {this.props.student.fullname}</span>*/}
           <br/>
           <Link to={adminRouteEnums.student.list}>Back to student list</Link>
           <Link to={adminRouteEnums.default}>Back to Dashboard</Link>
       
          </div>
        );
  }
}
