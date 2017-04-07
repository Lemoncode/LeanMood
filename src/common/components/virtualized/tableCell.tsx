import * as React from 'react';

interface TableCellComponentsProps {
  column: any;
  cell: React.ReactNode;
}

export const TableCellComponent: React.StatelessComponent<TableCellComponentsProps> = ({ cell, column }) => {
  return (
    <div
      className={column.props.className}
      style={column.props.style}
    >
      {cell}
    </div>
  );
};
