import * as React from 'react';
import { Student } from '../../../../../model/student/student';
import { IEditStudentErrors } from '../../../../../model/student/editStudentErrors';
import { InputComponent } from '../../../../../common/components/form';

interface IProps {
  student: Student;
  editStudentErrors: IEditStudentErrors;
  updateStudent: (viewModel: Student, fieldName: string, value: string) => void;
  saveStudentRequest: (student: Student) => void;
}

export const EditStudentComponent = (props: IProps) => {

  const updateStudent = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    props.updateStudent(props.student, fieldName, value);
  };

  const saveStudentRequest = (e) => {
    e.preventDefault();
    props.saveStudentRequest(props.student);
  };

  // TODO: Extract input checkbox to a CheckboxComponent in common?
  return (
    <div>
      <form role="form">
        <InputComponent
          type="text"
          label="Full name"
          placeholder="Full name"
          name="fullname"
          value={props.student.fullname}
          onChange={updateStudent.bind(this)}
          error={props.editStudentErrors.fullname.succeeded ? '' : props.editStudentErrors.fullname.errorMessage}
        />
        <InputComponent
          type="text"
          label="Email"
          placeholder="Email"
          name="email"
          value={props.student.email}
          onChange={updateStudent.bind(this)}
          error={props.editStudentErrors.email.succeeded ? '' : props.editStudentErrors.email.errorMessage}
        />
        <input
          type="checkbox"
          label="Active"
          name="isactive"
          checked={props.student.isActive}
          onChange={updateStudent.bind(this)}
        />
        <button
          type="submit"
          className="btn btn-lg btn-success btn-block"
          onClick={saveStudentRequest.bind(this)}
        >
          Save
        </button>
      </form>
    </div>
  );
};
