import * as React from 'react';
import { AutoSizer, Table, Column } from 'react-virtualized';
import { StudentSummary } from '../../../../../model/studentSummary';
import { StudentRowComponent } from './studentRow';
const classNames: any = require('./studentTableStyles.scss');

interface Props {
  studentList: StudentSummary[];
  width: number;
}

export const StudentTableComponent: React.StatelessComponent<Props> = ({ width, studentList }) => (
  <Table
    width={width}
    height={500}
    headerHeight={40}
    headerClassName={classNames.header}
    rowCount={studentList.length}
    rowHeight={50}
    rowGetter={rowGetter(studentList)}
    rowRenderer={StudentRowComponent}
    rowClassName={classNames.row}
    gridClassName={classNames.table}
  >
    <Column
      label="Active"
      dataKey="isActive"
      width={getWidthByPercentage(width, 10)}
    />
    <Column
      label="Fullname"
      dataKey="fullname"
      width={getWidthByPercentage(width, 40)}
    />
    <Column
      label="Email"
      dataKey="email"
      width={getWidthByPercentage(width, 30)}
    />
    <Column
      dataKey=""
      width={getWidthByPercentage(width, 20)}
    />
  </Table>
);

const rowGetter = (studentList) => ({ index }) => studentList[index];
const getWidthByPercentage = (width, percentage) => {
  return (percentage * width) / 100;
};
