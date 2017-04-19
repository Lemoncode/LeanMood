import * as React from 'react';
import { shallow } from 'enzyme';
import { TableCellComponent, TableCellColumnProps } from '../tableCell';

describe('TableCellComponent', () => {
  it('should render a div', () => {
    // Arrange
    const cellContent = null;
    const column = {
      props: {
        className: '',
        style: {},
        title: null,
      },
    } as React.ReactElement<TableCellColumnProps>;

    // Act
    const tableCellComponent = shallow(
      <TableCellComponent cellContent={cellContent} column={column} />,
    );

    // Assert
    expect(tableCellComponent.type()).to.be.equals('div');
  });

  it('should get "className" and "style" from "column" props', () => {
    // Arrange
    const cellContent = (<span>Column</span>);
    const column = {
      props: {
        className: 'columnClassName',
        style: {
          backgroundColor: 'red',
        },
        title: null,
      },
    } as React.ReactElement<TableCellColumnProps>;

    // Act
    const tableCellComponent = shallow(
      <TableCellComponent cellContent={cellContent} column={column} />,
    );

    // Assert
    expect(tableCellComponent.hasClass('columnClassName')).to.be.true;
    expect(tableCellComponent.prop('style')).to.have.property('backgroundColor').that.is.equals('red');
  });

  it('should use "cellContent" prop as children', () => {
    // Arrange
    const cellContent = (<span>Column</span>);
    const column = {
      props: {
        className: '',
        style: {},
        title: null,
      },
    } as React.ReactElement<TableCellColumnProps>;

    // Act
    const tableCellComponent = shallow(
      <TableCellComponent cellContent={cellContent} column={column} />,
    );

    // Assert
    expect(tableCellComponent.children().length).to.be.equals(1);
    expect(tableCellComponent.childAt(0).type()).to.be.equals('span');
    expect(tableCellComponent.childAt(0).text()).to.be.equals('Column');
  });
});
