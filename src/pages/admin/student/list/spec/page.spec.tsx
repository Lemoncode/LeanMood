import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary';
import { StudentTableComponent } from '../components/studentTable';
import { ListStudentPage } from '../page';

describe('admin/student/list/page', () => {
  it('is defined', () => {
    // Arrange
    const students: StudentSummary[] = [
      {
        email: 'test@test.com',
        fullname: 'John Doe',
        id: 2,
      },
      {
        email: 'mark@test.com',
        fullname: 'Mark Somez',
        id: 3,
      },
    ];

    const dummyFetchStudents = () => { };

    // Act
    const page = shallow(
      <ListStudentPage studentList={students} fetchStudents={dummyFetchStudents} />,
    );
    // Assert
    expect(page).not.to.be.undefined;
  });

  it('renders a student table', () => {
    // Arrange
    const students: StudentSummary[] = [
      {
        email: 'test@test.com',
        fullname: 'John Doe',
        id: 2,
      },
      {
        email: 'mark@test.com',
        fullname: 'Mark Somez',
        id: 3,
      },
    ];

    const dummyFetchStudents = () => { };

    // Act
    const pageWrapper = shallow(
      <ListStudentPage studentList={students} fetchStudents={dummyFetchStudents} />,
    );

    // Assert
    expect(pageWrapper.children().at(0).type()).to.be.equal(StudentTableComponent);
  });

  // sinon.test(
  it('renders a student table', () => {
    // Arrange
    const students: StudentSummary[] = [
      {
        email: 'test@test.com',
        fullname: 'John Doe',
        id: 2,
      },
      {
        email: 'mark@test.com',
        fullname: 'Mark Somez',
        id: 3,
      },
    ];

    const dummyFetchStudentSpy = sinon.spy();

    // Act
    const pageWrapper = mount(
      <ListStudentPage studentList={students} fetchStudents={dummyFetchStudentSpy} />,
    );

    // Assert
    expect(dummyFetchStudentSpy.calledOnce).to.be.true;
  });
});
