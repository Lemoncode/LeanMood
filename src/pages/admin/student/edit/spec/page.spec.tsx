import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { FieldValidationResult } from 'lc-form-validation';
import { Student } from '../../../../../model/student/student';
import { IEditStudentErrors } from '../../../../../model/student/editStudentErrors';
import { EditStudentComponent } from '../components/editStudentComponent';
import { EditStudentPage } from '../page';

describe('admin/student/edit/page', () => {
  let student: Student = null;
  let editStudentErrors: IEditStudentErrors = null;

  beforeEach(() => {
    student = {
      email: 'test@test.com',
      fullname: 'John Doe',
      phoneNumber: '999-999',
      isActive: true,
      id: 2,
    };

    editStudentErrors = {
      fullname: new FieldValidationResult(),
      email: new FieldValidationResult(),
    };
  });

  it('is defined', () => {
    // Arrange
    const onSaveSpy = sinon.spy();
    const onGetSpy = sinon.spy();
    const onUpdateSpy = sinon.spy();
    const onErrorSpy = sinon.spy();

    // Act
    const page = shallow(
      <EditStudentPage
        studentId={1}
        student={student}
        saveStudent={onSaveSpy}
        fetchStudent={onGetSpy}
        updateStudent={onUpdateSpy}
        editStudentError={editStudentErrors}
      />,
    );

    // Assert
    expect(page).not.to.be.undefined;
  });

  it('renders an edit student componet', () => {
    // Arrange
    const onSaveSpy = sinon.spy();
    const onGetSpy = sinon.spy();
    const onUpdateSpy = sinon.spy();
    const onErrorSpy = sinon.spy();

    // Act
    const pageWrapper = shallow(
      <EditStudentPage
        studentId={1}
        student={student}
        saveStudent={onSaveSpy}
        fetchStudent={onGetSpy}
        updateStudent={onUpdateSpy}
        editStudentError={editStudentErrors}
      />,
    );

    // Assert
    expect(pageWrapper.children().at(0).html()).to.be.equal('<h2>' + student.fullname + '</h2>');
    expect(pageWrapper.children().at(1).type()).to.be.equal(EditStudentComponent);
  });
});
