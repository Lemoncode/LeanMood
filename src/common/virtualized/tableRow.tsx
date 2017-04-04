import * as React from 'react';

// https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md
// https://github.com/bvaughn/react-virtualized/blob/master/source/Table/defaultRowRenderer.js
export interface TableRowProps {
  className: string;
  style: React.CSSProperties;
  columns: any[];
  index: number;
  key: any;
  isScrolling: boolean;
  onRowClick?: () => void;
  onRowDoubleClick?: () => void;
  onRowMouseOver?: () => void;
  onRowMouseOut?: () => void;
}

export const TableRowComponent: React.StatelessComponent<TableRowProps> = (props) => {
  return (
    <div className={props.className} style={props.style}>
      {React.Children.toArray(props.children).map(cellRenderer(props))}
    </div>
  );
};

const cellRenderer = ({columns}) => (cell, index) => {
  return (
    <div
      key={index}
      className={columns[index].props.className}
      style={columns[index].props.style}
    >
      {cell}
    </div>
  );
};
