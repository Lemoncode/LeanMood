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

interface IProps extends TableRowProps {
  rowKey: any;
  children?: React.ReactNode | React.ReactNode[];
}

export const TableRowComponent = (props: IProps) => {
  const cellRenderer = (cell, index) => {
    return (
      <div
        key={index}
        className={props.columns[index].props.className}
        style={props.columns[index].props.style}
      >
        {cell}
      </div>
    );
  };

  return (
    <div className={props.className} key={props.rowKey} style={props.style}>
      {
        React.Children.toArray(props.children).map((child, i) => cellRenderer(child, i))
      }
    </div>
  );
};
