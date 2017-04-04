import * as React from 'react';
import { shallow } from 'enzyme';
import { TableRowComponent } from '../tableRow';

describe('TableRowComponent tests', () => {
  it('should return a div with passed "className", "key" and "style"', () => {
    // Arrange
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      key: 0,
      isScrolling: false,
      style: { color: 'red' },
      rowKey: 5,
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
      rowKey: 0,
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

  it('should wrap each child with a div with "style" and "className" from "columns" object', () => {
    // Arrange
    const props = {
      className: '',
      columns: [
        { props: { className: 'column0', style: { color: '#000' } } },
        { props: { className: 'column1', style: { color: '#001' } } },
        { props: { className: 'column2', style: { color: '#002' } } },
      ],
      index: 0,
      key: 0,
      isScrolling: false,
      style: {},
      rowKey: 5,
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
    tableRowComponent.children().forEach((child, index) => {
      const divWrapper = child.at(0);
      expect(child.key()).to.be.equals(String(index));
      expect(child.prop('className')).to.be.equals(`column${index}`);
      expect(child.prop('style')).to.be.deep.equals({ color: `#00${index}` });
      expect(divWrapper.type()).to.be.equals('div');
      expect(divWrapper.childAt(0).type()).to.be.equals('span');
      expect(divWrapper.childAt(0).text()).to.be.equals(`Span ${index + 1}`);
    });
  });
});
