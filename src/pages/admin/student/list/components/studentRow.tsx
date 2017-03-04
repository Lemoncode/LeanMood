import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary';
import {TableRowProps, TableRowComponent} from '../../../../../common/virtualized/tableRow';

interface Props extends TableRowProps {
  rowData: StudentSummary;
}

// We can use spread operator for React properties too
// https://facebook.github.io/react/docs/jsx-in-depth.html#spread-attributes
export const StudentRowComponent = (props: Props) => {
  return (
    <TableRowComponent
      {...props}
      rowKey={props.key}
      // We have enable camelCase parser in webpack.config.js
      className={`${props.className}`}
    >
      <span>{props.rowData.fullname}</span>
      <span>{props.rowData.email}</span>
    </TableRowComponent>
  );
};
