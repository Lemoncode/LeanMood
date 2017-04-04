import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary';
import { StudentRowComponent } from './studentRow';
import { AutoSizer, Table, Column } from 'react-virtualized';
const classNames: any = require('./studentTableStyles.scss');

interface StudentTableComponentProps {
  studentList: StudentSummary[];
}

// More info about react-virtualized:
// https://github.com/Lemoncode/react-training-ts/tree/master/02%20Sample%20App/04%20TrainingListB
export const StudentTableComponent: React.StatelessComponent<StudentTableComponentProps> =
  ({ studentList }) => {
    return (
      <AutoSizer disableHeight={true}>
        {({ width }) => <InnerStudentTableComponent width={width} studentList={studentList} />}
      </AutoSizer>
    );
  };

const rowGetter = (studentList) => ({ index }) => studentList[index];
const getWidthByPercentage = (width, percentage) => {
  return (percentage * width) / 100;
};

interface InnerStudentTableComponentProps extends StudentTableComponentProps {
  width: number;
}

export const InnerStudentTableComponent: React.StatelessComponent<InnerStudentTableComponentProps> =
  ({ width, studentList }) => {
    return (
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
  };
