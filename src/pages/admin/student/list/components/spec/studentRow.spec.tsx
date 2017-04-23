import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { adminRouteEnums } from '../../../../../../common/routeEnums/admin';
import { TableRowComponent } from '../../../../../../common/components/virtualized/tableRow';
import { StudentSummary } from '../../../../../../model/student/studentSummary';
import { StudentRowComponent } from '../studentRow';

describe('StudentRowComponent', () => {
  it('should return a TableRowComponent', () => {
    // Arrange
    const student = new StudentSummary();
    const props = {
      className: '',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: student,
      style: {},
    };

    // Act
    const tableRowComponent = shallow(
      <StudentRowComponent {...props} />,
    );

    // Assert
    expect(tableRowComponent.type()).to.be.equals(TableRowComponent);
  });

  it('should pass its properties to TableRowComponent ', () => {
    // Arrange
    const student = new StudentSummary();
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 2,
      isScrolling: false,
      rowData: student,
      style: { color: 'red' },
    };

    // Act
    const tableRowComponent = shallow(
      <StudentRowComponent {...props} />,
    );

    // Assert
    expect(tableRowComponent.hasClass('rowClassName')).to.be.true;
    expect(tableRowComponent.prop('columns')).to.be.deep.equals([]);
    expect(tableRowComponent.prop('index')).to.be.equals(2);
    expect(tableRowComponent.prop('isScrolling')).to.be.false;
    expect(tableRowComponent.prop('rowData')).to.be.equals(student);
    expect(tableRowComponent.prop('style')).to.be.deep.equals({ color: 'red' });
  });

  describe('when passing columns to TableRowComponent', () => {
    it('should pass as 1st child a disabled checkbox with the checked property according to student.isActive', () => {
      // Arrange
      const student = new StudentSummary();
      student.id = 32;
      student.fullname = 'John Doe';
      student.email = 'jdoe@example.com';
      student.isActive = true;
      const props = {
        className: 'rowClassName',
        columns: [],
        index: 2,
        isScrolling: false,
        rowData: student,
        style: { color: 'red' },
      };

      // Act
      const tableRowComponent = shallow(
        <StudentRowComponent {...props} />,
      );
      const checkbox = tableRowComponent.childAt(0);

      // Assert
      expect(checkbox.type()).to.be.equals('input');
      expect(checkbox.prop('type')).to.be.equals('checkbox');
      expect(checkbox.prop('disabled')).to.be.true;
      expect(checkbox.prop('checked')).to.be.true;
    });

    it('should pass as 2nd child a span showing the student.fullname', () => {
      // Arrange
      const student = new StudentSummary();
      student.id = 32;
      student.fullname = 'John Doe';
      student.email = 'jdoe@example.com';
      student.isActive = true;
      const props = {
        className: 'rowClassName',
        columns: [],
        index: 2,
        isScrolling: false,
        rowData: student,
        style: { color: 'red' },
      };

      // Act
      const tableRowComponent = shallow(
        <StudentRowComponent {...props} />,
      );
      const span = tableRowComponent.childAt(1);

      // Assert
      expect(span.type()).to.be.equals('span');
      expect(span.text()).to.be.equals('John Doe');
    });

    it('should pass as 3rd child a span showing the student.email', () => {
      // Arrange
      const student = new StudentSummary();
      student.id = 32;
      student.fullname = 'John Doe';
      student.email = 'jdoe@example.com';
      student.isActive = true;
      const props = {
        className: 'rowClassName',
        columns: [],
        index: 2,
        isScrolling: false,
        rowData: student,
        style: { color: 'red' },
      };

      // Act
      const tableRowComponent = shallow(
        <StudentRowComponent {...props} />,
      );
      const span = tableRowComponent.childAt(2);

      // Assert
      expect(span.type()).to.be.equals('span');
      expect(span.text()).to.be.equals('jdoe@example.com');
    });

    it('should pass as 4th child a div with two childs', () => {
      // Arrange
      const student = new StudentSummary();
      student.id = 32;
      student.fullname = 'John Doe';
      student.email = 'jdoe@example.com';
      student.isActive = true;
      const props = {
        className: 'rowClassName',
        columns: [],
        index: 2,
        isScrolling: false,
        rowData: student,
        style: { color: 'red' },
      };

      // Act
      const tableRowComponent = shallow(
        <StudentRowComponent {...props} />,
      );
      const div = tableRowComponent.childAt(3);

      // Assert
      expect(div.type()).to.be.equals('div');
      expect(div.prop('className')).to.be.equals('btn-group');
      expect(div.children().length).to.be.equals(2);
    });

    describe('action button tests', () => {
      it('should have as a 1st child a link to edit the student', () => {
        // Arrange
        const student = new StudentSummary();
        student.id = 32;
        student.fullname = 'John Doe';
        student.email = 'jdoe@example.com';
        student.isActive = true;
        const props = {
          className: 'rowClassName',
          columns: [],
          index: 2,
          isScrolling: false,
          rowData: student,
          style: { color: 'red' },
        };

        // Act
        const tableRowComponent = shallow(
          <StudentRowComponent {...props} />,
        );
        const div = tableRowComponent.childAt(3);
        const link = div.childAt(0);
        const icon = link.childAt(0);

        // Assert
        expect(link.type()).to.be.equals(Link);
        expect(link.prop('className')).to.be.equals('btn btn-primary');
        expect(link.prop('to')).to.be.equals(`${adminRouteEnums.student.edit}/32`);
        expect(icon.type()).to.be.equals('i');
        expect(icon.prop('className')).to.be.equals('glyphicon glyphicon-pencil');
      });

      it('should have as a 2nd child a button to delete the student', () => {
        // Arrange
        const student = new StudentSummary();
        student.id = 32;
        student.fullname = 'John Doe';
        student.email = 'jdoe@example.com';
        student.isActive = true;
        const props = {
          className: 'rowClassName',
          columns: [],
          index: 2,
          isScrolling: false,
          rowData: student,
          style: { color: 'red' },
        };

        // Act
        const tableRowComponent = shallow(
          <StudentRowComponent {...props} />,
        );
        const div = tableRowComponent.childAt(3);
        const button = div.childAt(1);
        const icon = button.childAt(0);

        // Assert
        expect(button.type()).to.be.equals('button');
        expect(button.prop('className')).to.be.equals('btn btn-danger');
        expect(icon.type()).to.be.equals('i');
        expect(icon.prop('className')).to.be.equals('glyphicon glyphicon-trash');
      });
    });
  });
});
