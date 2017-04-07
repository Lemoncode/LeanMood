import * as React from 'react';
import { TableRowProps } from 'react-virtualized';
import { TableCellComponent } from './tableCell';

// https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md
// https://github.com/bvaughn/react-virtualized/blob/master/source/Table/defaultRowRenderer.js
export const TableRowComponent: React.StatelessComponent<TableRowProps> = (props) => {
  return (
    <div className={props.className} style={props.style}>
      {React.Children.map(
        props.children,
        (child, index) => <TableCellComponent cellContent={child} key={index} column={props.columns[index]} />,
      )}
    </div>
  );
};
