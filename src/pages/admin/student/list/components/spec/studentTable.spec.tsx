import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Table } from 'react-virtualized';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { StudentSummary } from '../../../../../../model/student/studentSummary';
import { StudentTableComponent } from '../studentTable';
import { StudentRowComponent } from '../studentRow';

describe('StudentTableComponent', () => {
  it('Should return a react-virtualized Table', () => {
    // Arrange
    const studentList = [];
    const width = 0;

    // Act
    const studentTableComponent = shallow(
      <StudentTableComponent width={width} studentList={studentList} />,
    );

    // Assert
    expect(studentTableComponent.type()).to.be.equals(Table);
  });

  describe('header tests', () => {
    it('should render an header column to show the "isActive" student property', () => {
      // Arrange
      const studentList = [];
      const width = 100;

      // Act
      const studentTableComponent = shallow(
        <StudentTableComponent width={width} studentList={studentList} />,
      );
      const headerColumns = studentTableComponent.children();

      // Assert
      expect(headerColumns.length).to.be.equals(4);
      expect(headerColumns.at(0).prop('label')).to.be.equals('Active');
      expect(headerColumns.at(0).prop('dataKey')).to.be.equals('isActive');
      expect(headerColumns.at(0).prop('width')).to.be.equals(10); // 10% of 100px
    });

    it('should render an header column to show the "fullname" student property', () => {
      // Arrange
      const studentList = [];
      const width = 100;

      // Act
      const studentTableComponent = shallow(
        <StudentTableComponent width={width} studentList={studentList} />,
      );
      const headerColumns = studentTableComponent.children();

      // Assert
      expect(headerColumns.length).to.be.equals(4);
      expect(headerColumns.at(1).prop('label')).to.be.equals('Fullname');
      expect(headerColumns.at(1).prop('dataKey')).to.be.equals('fullname');
      expect(headerColumns.at(1).prop('width')).to.be.equals(40); // 40% of 100px
    });

    it('should render an header column to show the "Email" student property', () => {
      // Arrange
      const studentList = [];
      const width = 100;

      // Act
      const studentTableComponent = shallow(
        <StudentTableComponent width={width} studentList={studentList} />,
      );
      const headerColumns = studentTableComponent.children();

      // Assert
      expect(headerColumns.length).to.be.equals(4);
      expect(headerColumns.at(2).prop('label')).to.be.equals('Email');
      expect(headerColumns.at(2).prop('dataKey')).to.be.equals('email');
      expect(headerColumns.at(2).prop('width')).to.be.equals(30); // 30% of 100px
    });

    it('should render an header column to show the "isActive" student property', () => {
      // Arrange
      const studentList = [];
      const width = 100;

      // Act
      const studentTableComponent = shallow(
        <StudentTableComponent width={width} studentList={studentList} />,
      );
      const headerColumns = studentTableComponent.children();

      // Assert
      expect(headerColumns.length).to.be.equals(4);
      expect(headerColumns.at(3).prop('label')).to.be.undefined;
      expect(headerColumns.at(3).prop('dataKey')).to.be.equals('');
      expect(headerColumns.at(3).prop('width')).to.be.equals(20); // 20% of 100px
    });
  });

  describe('rows tests', () => {
    it('should use StudentRowComponent to render rows', () => {
      // Arrange
      const studentList = [];
      const width = 100;

      // Act
      const studentTableComponent = shallow(
        <StudentTableComponent width={width} studentList={studentList} />,
      );

      // Assert
      expect(studentTableComponent.prop('rowRenderer')).to.be.equals(StudentRowComponent);
    });

    it('should render as many rows as students', () => {
      // Arrange
      const studentList: StudentSummary[] = [
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
      const width = 600;

      // Act
      const studentTableComponent = mount(
        <StudentTableComponent width={width} studentList={studentList} />,
      );

      // Assert
      expect(studentTableComponent.find('.ReactVirtualized__Table__row').length).to.be.equals(2);
    });
  });
});
