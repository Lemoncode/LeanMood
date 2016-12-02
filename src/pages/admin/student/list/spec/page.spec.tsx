import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { ListStudentPage } from '../page'
import { StudentSummary } from '../../../../../model/studentSummary'
import { StudentTableComponent }  from '../components/studentTable'

describe('admin/student/list/page', () => {
  it('is defined', () => {
    // Arrange
    const students : StudentSummary[] = [
      {
        id: 2,
        fullname: 'John Doe',
        email: 'test@test.com'
      },
      {
        id: 3,
        fullname: 'Mark Somez',
        email: 'mark@test.com'
      }
    ];

    const dummyFetchStudents = () => {};

    // Act
    const page = shallow(
      <ListStudentPage studentList={students} fetchStudents={dummyFetchStudents}/>
    );
    // Assert
    expect(page).not.to.be.undefined;
  });

  it('renders a student table', () => {
    // Arrange
    const students : StudentSummary[] = [
      {
        id: 2,
        fullname: 'John Doe',
        email: 'test@test.com'
      },
      {
        id: 3,
        fullname: 'Mark Somez',
        email: 'mark@test.com'
      }
    ];

    const dummyFetchStudents = () => {};

    // Act
    const pageWrapper = shallow(
      <ListStudentPage  studentList={students} fetchStudents={dummyFetchStudents}/>
    );

    // Assert
    expect(pageWrapper.children().at(0).type()).to.be.equal(StudentTableComponent);
  });

//sinon.test(
  it('renders a student table', () => {
    // Arrange
    const students : StudentSummary[] = [
      {
        id: 2,
        fullname: 'John Doe',
        email: 'test@test.com'
      },
      {
        id: 3,
        fullname: 'Mark Somez',
        email: 'mark@test.com'
      }
    ];

    const dummyFetchStudentSpy = sinon.spy();

    // Act
    const pageWrapper = mount(
      <ListStudentPage  studentList={students} fetchStudents={dummyFetchStudentSpy}/>
    );

    // Assert
    expect(dummyFetchStudentSpy.calledOnce).to.be.true;
  });


});
