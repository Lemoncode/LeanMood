import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary';
import { StudentRowComponent } from './studentRow';
import {AutoSizer, Table, Column} from 'react-virtualized';
const classNames: any = require('./studentTableStyles.scss');

interface IProps {
  studentList: StudentSummary[];
}

// More info about react-virtualized:
// https://github.com/Lemoncode/react-training-ts/tree/master/02%20Sample%20App/04%20TrainingListB
export const StudentTableComponent: React.StatelessComponent<IProps> = ({studentList}: IProps = {studentList: []}) => {

  const getWidthByPercentage = (width, percentage) => {
   return (percentage * width) / 100;
  };

  const rowGetter = ({index}) => studentList[index];

  return (
    <AutoSizer disableHeight>
      {({width}) =>
          <Table
            width={width}
            height={500}
            headerHeight={40}
            headerClassName={classNames.header}
            rowCount={studentList.length}
            rowHeight={50}
            rowGetter={rowGetter}
            rowRenderer={StudentRowComponent}
            rowClassName={classNames.row}
          >
            <Column
              label="is Active"
              dataKey="isActive"
              width={getWidthByPercentage(width, 10)}
            />
            <Column
              label="Fullname"
              dataKey="fullname"
              width={getWidthByPercentage(width, 40)}
            />
            <Column
              label="EMail"
              dataKey="email"
              width={getWidthByPercentage(width, 30)}
            />
            <Column
              label=""
              dataKey=""
              width={getWidthByPercentage(width, 20)}
            />
          </Table>}
    </AutoSizer>
  );
};
