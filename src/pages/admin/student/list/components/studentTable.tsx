import * as React from 'react';
import { Table, Column } from 'react-virtualized';
import { StudentSummary } from '../../../../../model/student/studentSummary';
import { StudentRowComponent } from './studentRow';
import { getSizeByPercentage } from '../../../../../common/helper/percentage/getSizeByPercentage';
const classNames: any = require('./studentTableStyles.scss');

interface Props {
  studentList: StudentSummary[];
  width: number;
}

const TABLE_STYLES = {
  height: 500,
  headerHeight: 40,
  rowHeight: 50,
  columnsWidthPercentage: {
    isActive: 10,
    fullName: 40,
    email: 30,
    actionsPanel: 20,
  },
};

export const StudentTableComponent: React.StatelessComponent<Props> = ({ width, studentList }) => (
  <Table
    width={width}
    height={TABLE_STYLES.height}
    headerHeight={TABLE_STYLES.headerHeight}
    headerClassName={classNames.header}
    rowCount={studentList.length}
    rowHeight={TABLE_STYLES.rowHeight}
    rowGetter={rowGetter(studentList)}
    rowRenderer={StudentRowComponent}
    rowClassName={classNames.row}
    gridClassName={classNames.table}
  >
    <Column
      label="Active"
      dataKey="isActive"
      width={getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.isActive)}
    />
    <Column
      label="Fullname"
      dataKey="fullname"
      width={getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.fullName)}
    />
    <Column
      label="Email"
      dataKey="email"
      width={getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.email)}
    />
    <Column
      dataKey=""
      width={getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.actionsPanel)}
    />
  </Table>
);

const rowGetter = (studentList) => ({ index }) => studentList[index];
