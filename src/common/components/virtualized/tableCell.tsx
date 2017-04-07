import * as React from 'react';

// "originalColumn" will remain as <any> (same like react-virtualized) but it is actually a React node.
interface TableCellComponentsProps {
  column: any;
  cellContent: React.ReactNode;
}

export const TableCellComponent: React.StatelessComponent<TableCellComponentsProps> =
  ({ cellContent, column }) => {
    return (
      <div
        className={column.props.className}
        style={column.props.style}
      >
        {cellContent}
      </div>
    );
  };
