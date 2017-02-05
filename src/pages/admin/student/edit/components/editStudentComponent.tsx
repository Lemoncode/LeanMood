import * as React from 'react';
import { Student } from '../../../../../model/student';

interface IProps {
  student: Student;
  updateStudent: (property: string, value: any) => void;
  saveStudent: (event: any) => void;
}

function updateStudentFullName(e: any) {
  this.props.updateStudent('fullname', e.target.value);
}

function updateStudentEmail(e: any) {
  this.props.updateStudent('email', e.target.value);
}

function updateStudentIsActive(e: any) {
  this.props.updateStudent('isActive', e.target.value);
}

function saveStudent(e: any) {
  this.props.saveStudent(event);
}

export class EditStudentComponent extends React.Component<IProps, {}>  {
  public render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.student.fullname}
          onChange={updateStudentFullName.bind(this)}
        />
        <br />
        <input
          type="text"
          value={this.props.student.email}
          onChange={updateStudentEmail.bind(this)}
        />
        <br />
        <input
          type="checkbox"
          checked={this.props.student.isActive}
          onChange={updateStudentIsActive.bind(this)}
        />
        <br />
        <button onClick={saveStudent.bind(this)}>Save</button>
      </div>
    );
  };
}
