import * as React from 'react';
import { TableCellComponent } from './tableCell';

// https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md
// https://github.com/bvaughn/react-virtualized/blob/master/source/Table/defaultRowRenderer.js
export interface TableRowProps {
  className: string;
  columns: React.ReactNode[];
  index: number;
  isScrolling: boolean;
  onRowClick?: () => void;
  onRowDoubleClick?: () => void;
  onRowMouseOver?: () => void;
  onRowMouseOut?: () => void;
  style: React.CSSProperties;
}

export const TableRowComponent: React.StatelessComponent<TableRowProps> = (props) => {
  return (
    <div className={props.className} style={props.style}>
      {React.Children.toArray(props.children).map(
        (cell, index) => <TableCellComponent cell={cell} key={index} column={props.columns[index]} />,
      )}
    </div>
  );
};
