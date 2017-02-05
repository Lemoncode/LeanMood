import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { Student } from '../../../../../model/student';
import { EditStudentComponent } from '../components/editStudentComponent';
import { EditStudentPage } from '../page';

describe('admin/student/edit/page', () => {
  let student: Student = null;

  beforeEach(() => {
    student = {
        email: 'test@test.com',
        fullname: 'John Doe',
        phoneNumber: '999-999',
        isActive: true,
        id: 2,
      };
  });

  it('is defined', () => {
    // Arrange
    const onSaveSpy = sinon.spy();
    const onGetSpy = sinon.spy();

    // Act
    const page = shallow(
      <EditStudentPage student={student} saveStudent={onSaveSpy} getStudent={onGetSpy} />,
    );

    // Assert
    expect(page).not.to.be.undefined;
  });

  it('renders an edit student componet', () => {
    // Arrange
    const onSaveSpy = sinon.spy();
    const onGetSpy = sinon.spy();

    // Act
    const pageWrapper = shallow(
      <EditStudentPage student={student} saveStudent={onSaveSpy} getStudent={onGetSpy} />,
    );

    // Assert
    expect(pageWrapper.children().at(0).html()).to.be.equal('<h2>' + student.fullname + '</h2>');
    expect(pageWrapper.children().at(1).type()).to.be.equal(EditStudentComponent);
  });
});
