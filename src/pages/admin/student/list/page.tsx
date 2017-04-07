import * as React from 'react';
import { Link } from 'react-router';
import { StudentSummary } from '../../../../model/studentSummary';
import { StudentTableComponent } from './components/studentTable';
import { adminRouteEnums } from '../../../../common/routeEnums/admin';

interface ListStudentPageProps extends React.Props<ListStudentPage> {
  studentList: StudentSummary[];
  fetchStudents(): void;
}

export class ListStudentPage extends React.Component<ListStudentPageProps, {}> {
  public componentDidMount() {
    this.props.fetchStudents();
  }

  public render() {
    return (
      <div>
        <h1>Students</h1>
        <StudentTableComponent studentList={this.props.studentList} />
        <Link to={adminRouteEnums.default}>Go back to dashboard</Link>
      </div>
    );
  }
}
