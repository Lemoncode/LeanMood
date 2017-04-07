import * as React from 'react';
import { shallow } from 'enzyme';
import { TableCellComponent } from '../tableCell';

describe('TableCellComponent', () => {
  it('should render a div', () => {
    // Arrange
    const cellContent = null;
    const column = {
      props: {
        className: '',
        style: {},
      },
    };

    // Act
    const tableCellComponent = shallow(
      <TableCellComponent cellContent={cellContent} column={column} />
    );

    // Assert
    expect(tableCellComponent.type()).to.be.equals('div');
  });

  xit('should have "cellContent" prop as children', () => {
    // Arrange
    const cellContent = (<span>Column</span>);
    const column = {
      props: {
        className: '',
        style: {},
      },
    };

    // Act
    const tableCellComponent = shallow(
      <TableCellComponent cellContent={cellContent} column={column} />,
    );

    // Assert
    expect(tableCellComponent.children().length).to.be.equals(1);
    expect(tableCellComponent.childAt(0)).to.be.deep.equals(cellContent);
  });
});
