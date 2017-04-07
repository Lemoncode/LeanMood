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
      isScrolling: false,
      style: { color: 'red' },
      rowData: null,
    };

    // Act
    const tableRowComponent = shallow(
      <TableRowComponent {...props} />,
    );

    // Assert
    expect(tableRowComponent.prop('className')).to.be.equals('rowClassName');
    expect(tableRowComponent.prop('style')).to.be.deep.equals({ color: 'red' });
  });

  it('should render as many TableCellComponents as childs it has', () => {
    // Arrange
    const props = {
      className: '',
      columns: [],
      index: 0,
      isScrolling: false,
      style: {},
      rowData: null,
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

  it('should pass "cellContent" and "column" to each TableCellComponent', () => {
    // Arrange
    const column1 = { props: { className: 'column1' } };
    const props = {
      className: '',
      columns: [
        column1,
      ],
      index: 0,
      isScrolling: false,
      style: {},
      rowData: null,
    };

    // Act
    const innerComponent = (<span>Column 1</span>);
    const tableRowComponent = shallow(
      <TableRowComponent {...props}>
        {innerComponent}
      </TableRowComponent>,
    );
    const tableCellComponent = tableRowComponent.find(TableCellComponent);

    // Assert
    expect(tableCellComponent.prop('column')).to.be.deep.equals(column1);
    expect(tableCellComponent.prop('cellContent')).to.be.equals(innerComponent);
  });
});
