import * as React from 'react';

// Generic properties column properties
// from https://github.com/bvaughn/react-virtualized/blob/master/source/Table/Table.js#L400
export interface TableCellColumnProps {
  className: string;
  style: React.CSSProperties;
  title: string | null;
}

interface TableCellComponentsProps {
  column: React.ReactElement<TableCellColumnProps>;
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
