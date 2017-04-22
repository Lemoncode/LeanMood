import * as React from 'react';
import { Link } from 'react-router';
import { Student } from '../../../../model/student/student';
import { IEditStudentErrors } from '../../../../model/student/editStudentErrors';
import { EditStudentComponent } from './components/editStudentComponent';
const classNames: any = require('./pageStyles.scss');

interface IProps extends React.Props<EditStudentPage> {
  studentId: number;
  student: Student;
  editStudentError: IEditStudentErrors;
  fetchStudent: (id: number) => void;
  updateStudent: (viewModel: Student, fieldName: string, value: string) => void;
  saveStudent: (student: Student) => void;
}

export class EditStudentPage extends React.Component<IProps, {}> {
  public constructor(props) {
    super(props);
    props.fetchStudent(props.studentId);
  }

  public render() {
    return (
      <div className={`container-fluid ${classNames.page}`}>
        <h2>{this.props.student.fullname}</h2>
        <EditStudentComponent
          student={this.props.student}
          editStudentErrors={this.props.editStudentError}
          updateStudent={this.props.updateStudent}
          saveStudentRequest={this.props.saveStudent}
        />
        <br />
        <br />
        <Link to="/admin/student/list">Back to student list</Link>
        <Link to="/admin">Back to Dashboard</Link>
      </div>
    );
  };
}
