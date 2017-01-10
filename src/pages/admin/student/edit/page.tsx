import * as React from 'react';
import { Link } from 'react-router';
import { Student } from '../../../../model/student';
import { EditStudentComponent } from './EditStudentComponent';

interface IProps {
  editStudent: Student;
}

export class EditStudentPage extends React.Component<IProps, {}> {
  public render() {
    return (
      <div>
        <h2>{this.props.editStudent.fullname}</h2>
        <EditStudentComponent />
        <br />
        <br />
        <Link to="/admin/student/list">Back to student list</Link>
        <Link to="/admin">Back to Dashboard</Link>
      </div>
    );
  }
}
