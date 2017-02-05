import * as React from 'react';
import { Link } from 'react-router';
import { Student } from '../../../../model/student';
import { EditStudentComponent } from './components/editStudentComponent';

interface IProps extends React.Props<EditStudentPage> {
  student: Student;
  getStudent: (id: number) => void;
  saveStudent: (student: Student) => void;
}

export class EditStudentPage extends React.Component<IProps, {}> {
  public componentDidMount() {
    // TODO: Get the Student Id from the URL
    this.props.getStudent(32);
  }

  public render() {
    if (this.props.student.id === -1) {
      return (
        <div>
        <h2>Loading...</h2>
        <br />
        <br />
        <Link to="/admin/student/list">Back to student list</Link>
        <Link to="/admin">Back to Dashboard</Link>
      </div>);
    }

    return (
      <div>
        <h2>{this.props.student.fullname}</h2>
        <EditStudentComponent
          student={this.props.student}
          updateStudent={this.updateStudent.bind(this)}
          saveStudent={this.saveStudent.bind(this)}
        />
        <br />
        <br />
        <Link to="/admin/student/list">Back to student list</Link>
        <Link to="/admin">Back to Dashboard</Link>
      </div>
    );
  };

  private updateStudent(property: string, value: any) {
    // Clone the object
    this.props.student = {
      id: this.props.student.id,
      fullname: this.props.student.fullname,
      email: this.props.student.email,
      phoneNumber: this.props.student.phoneNumber,
      isActive: this.props.student.isActive,
    };

    this.props.student[property] = value;
  }

  private saveStudent(event) {
    event.preventDefault();

    // if(!this.memberFormIsValid()) {
    //   return;
    // }

    this.props.saveStudent(this.props.student);
  };

}
