import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary';
import { StudentRowComponent } from './studentRow';
import {AutoSizer, Table, Column} from 'react-virtualized';

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
            rowCount={studentList.length}
            rowHeight={50}
            rowGetter={rowGetter}
            rowRenderer={StudentRowComponent}
          >
            <Column
              label="Fullname"
              dataKey="fullname"
              width={getWidthByPercentage(width, 50)}
            />
            <Column
              label="EMail"
              dataKey="fullname"
              width={getWidthByPercentage(width, 50)}
            />
          </Table>}
    </AutoSizer>
  );
};
