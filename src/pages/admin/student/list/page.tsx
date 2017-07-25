import * as React from 'react';
import { Link } from 'react-router';
import { AutoSizer } from 'react-virtualized';
import { StudentSummary } from '../../../../model/student/studentSummary';
import { StudentTableComponent } from './components/studentTable';
import { adminRouteEnums } from '../../../../common/routeEnums/admin';

interface Props {
  studentList: StudentSummary[];
  fetchStudents(): void;
}

export class ListStudentPage extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.fetchStudents();
  }

  public render() {
    return (
      <div>
        <h1>Students</h1>
        <AutoSizer disableHeight={true}>
          {({ width }) => <StudentTableComponent width={width} studentList={this.props.studentList} />}
        </AutoSizer>
        <Link to={adminRouteEnums.default}>Go back to dashboard</Link>
      </div>
    );
  }
}
