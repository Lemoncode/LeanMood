import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { Student } from '../../../../../../model/student/student';
import { FieldValidationResult } from 'lc-form-validation';
import { EditStudentComponent } from '../editStudentComponent';
import { IEditStudentErrors } from '../../../../../../model/student/editStudentErrors';

describe('EditStudentComponent', () => {
  it('Should not be undefined', () => {
    // Arrange
    const student: Student = {
      email: 'test@test.com',
      fullname: 'John Doe',
      phoneNumber: '999 999',
      isActive: true,
      id: 2,
    };

    const studentError: IEditStudentErrors = {
      fullname: new FieldValidationResult(),
      email: new FieldValidationResult(),
    };

    const onSaveSpy = sinon.spy();
    const onUpdateSpy = sinon.spy();

    // Act
    const editStudentComponent = shallow(
      <EditStudentComponent
        student={student}
        editStudentErrors={studentError}
        updateStudent={onUpdateSpy}
        saveStudentRequest={onSaveSpy}
      />,
    );

    // Assert
    expect(editStudentComponent).not.to.be.undefined;

  });

  it('Should display single student data', () => {
    // Arrange
    const student: Student = {
      email: 'test@test.com',
      fullname: 'John Doe',
      phoneNumber: '999 999',
      isActive: true,
      id: 2,
    };

    const studentError: IEditStudentErrors = {
      fullname: new FieldValidationResult(),
      email: new FieldValidationResult(),
    };

    const onSaveSpy = sinon.spy();
    const onUpdateSpy = sinon.spy();

    // Act
    const editStudentComponent = shallow(
      <EditStudentComponent
        student={student}
        editStudentErrors={studentError}
        updateStudent={onUpdateSpy}
        saveStudentRequest={onSaveSpy}
      />,
    );

    // Assert
    const expectedDomTree = `
        <div>
          <form role="form">
            <div class="form-group">
              <label for="fullname">Full name</label>
              <input type="text" name="fullname" class="form-control" placeholder="Full name" value="John Doe"/>
              <div class="help-block">
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" name="email" class="form-control" placeholder="Email" value="test@test.com"/>
              <div class="help-block">
              </div>
            </div>
            <input type="checkbox" label="Active" name="isactive" checked=""/>
            <button type="submit" class="btn btn-lg btn-success btn-block">Save</button>
          </form>
        </div>`;

    expect(editStudentComponent.html()).to.be.equal(multilineTrim(expectedDomTree));
  });

  /*it('Calls to updateStudent', () => {
    // Arrange
    const student: Student = {
      email: 'test@test.com',
      fullname: 'John Doe',
      phoneNumber: '999 999',
      isActive: true,
      id: 2,
    };

    const studentError: IEditStudentErrors = {
      fullname: new FieldValidationResult(),
      email: new FieldValidationResult(),
    };

    const onSaveSpy = sinon.spy();
    const onUpdateSpy = sinon.spy();

    // Act
    const editStudentComponent = shallow(
      <EditStudentComponent
        student={student}
        editStudentErrors={studentError}
        updateStudent={onUpdateSpy}
        saveStudentRequest={onSaveSpy}
      />,
    );

    editStudentComponent.find('form').childAt(2).prop('value')('test');

    // Assert
    expect(onUpdateSpy.called).to.be.true;
  });*/
});
