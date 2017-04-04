import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Link } from 'react-router';
import { StudentSummary } from '../../../../../model/studentSummary';
import { StudentTableComponent } from '../components/studentTable';
import { ListStudentPage } from '../page';
import { adminRouteEnums } from '../../../../../common/routeEnums/admin';

describe('ListStudentPage', () => {
  it('should return a div', () => {
    // Arrange
    const students: StudentSummary[] = [
      {
        email: 'test@test.com',
        fullname: 'John Doe',
        id: 2,
        isActive: true,
      },
      {
        email: 'mark@test.com',
        fullname: 'Mark Somez',
        id: 3,
        isActive: true,
      },
    ];

    const dummyFetchStudents = () => { };

    // Act
    const listStudentPage = shallow(
      <ListStudentPage studentList={students} fetchStudents={dummyFetchStudents} />,
    );

    // Assert
    expect(listStudentPage.type()).to.be.equals('div');
  });

  it('should render a header', () => {
    // Arrange
    const students = [];
    const fetchStudents = () => { };

    // Act
    const listStudentPage = shallow(
      <ListStudentPage studentList={students} fetchStudents={fetchStudents} />,
    );
    const header = listStudentPage.childAt(0);

    // Assert
    expect(header.type()).to.be.equals('h1');
    expect(header.childAt(0).text()).to.be.equals('Students');
  });

  it('should render a student table', () => {
    // Arrange
    const students = [];
    const fetchStudents = () => { };

    // Act
    const listStudentPage = shallow(
      <ListStudentPage studentList={students} fetchStudents={fetchStudents} />,
    );
    const studentsTable = listStudentPage.childAt(1);

    // Assert
    expect(studentsTable.type()).to.be.equal(StudentTableComponent);
  });

  it('should render a link to go back to dashboard', () => {
    // Arrange
    const students = [];
    const fetchStudents = () => { };

    // Act
    const listStudentPage = shallow(
      <ListStudentPage studentList={students} fetchStudents={fetchStudents} />,
    );
    const link = listStudentPage.childAt(2);

    // Assert
    expect(link.is(Link)).to.be.true;
    expect(link.prop('to')).to.be.equals(adminRouteEnums.default);
    expect(link.childAt(0).text()).to.be.equals('Go back to dashboard');
  });
});
