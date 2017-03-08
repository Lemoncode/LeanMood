import * as React from 'react';
import {Link} from 'react-router';
import { StudentSummary } from '../../../../model/student/studentSummary';
import { StudentTableComponent } from './components/studentTable';
import {adminRouteEnums} from '../../../../common/routeEnums/admin';

interface IProps extends React.Props<ListStudentPage> {
  studentList: StudentSummary[];
  fetchStudents: () => void;
}

export class ListStudentPage extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchStudents();
  }

  public render() {
    return (
      <div>
        <StudentTableComponent studentList={this.props.studentList}/>
        <Link to={`${adminRouteEnums.student.edit}/32`}>Go to student Edit</Link>
      </div>
    );
  }
}
