import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { TableRowComponent } from '../tableRow';
import { TableCellComponent } from '../tableCell';

describe('TableRowComponent tests', () => {
  it('should return a div with passed "className" and "style"', () => {
    // Arrange
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      key: 5,
      isScrolling: false,
      style: { color: 'red' },
    };

    // Act
    const tableRowComponent = shallow(
      <TableRowComponent {...props} />,
    );

    // Assert
    expect(tableRowComponent.prop('className')).to.be.equals('rowClassName');
    expect(tableRowComponent.prop('style')).to.be.deep.equals({ color: 'red' });
  });

  it('should have as many child component as passed', () => {
    // Arrange
    const props = {
      className: 'rowClassName',
      columns: [
        { props: { className: 'column1' } },
        { props: { className: 'column2' } },
        { props: { className: 'column3' } },
      ],
      index: 0,
      key: 0,
      isScrolling: false,
      style: {},
    };

    // Act
    const tableRowComponent = shallow(
      <TableRowComponent {...props}>
        <span>Span 1</span>
        <span>Span 2</span>
        <span>Span 3</span>
      </TableRowComponent>,
    );

    // Assert
    expect(tableRowComponent.children().length).to.be.equals(3);
  });

  it('should render as many TableCellComponents as childs it has', () => {
    // Arrange
    const props = {
      className: '',
      columns: [],
      index: 0,
      key: 0,
      isScrolling: false,
      style: {},
    };

    // Act
    const tableRowComponent = shallow(
      <TableRowComponent {...props}>
        <span>Column 1</span>
        <span>Column 2</span>
        <span>Column 3</span>
      </TableRowComponent>,
    );

    // Assert
    expect(tableRowComponent.children().length).to.be.equals(3);
  });
});
