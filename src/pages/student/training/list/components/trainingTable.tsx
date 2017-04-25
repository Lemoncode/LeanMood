import * as React from 'react';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TrainingRowComponent } from './trainingRow';
import { Table, Column } from 'react-virtualized';
import { getSizeByPercentage } from '../../../../../common/helper/percentage/getSizeByPercentage';
const classNames: any = require('./trainingTableStyles.scss');

interface IProps {
  width: number;
  trainingList: TrainingSummary[];
}

const TABLE_STYLES = {
  height: 500,
  headerHeight: 40,
  rowHeight: 50,
  columnsWidthPercentage: {
    isActive: 10,
    name: 50,
    start: 20,
    end: 20,
  },
};

export const TrainingTableComponent = (props: IProps = { width: 500, trainingList : [] }) => {
  return (
    <Table
      width={props.width}
      height={TABLE_STYLES.height}
      headerHeight={TABLE_STYLES.headerHeight}
      headerClassName={classNames.header}
      rowCount={props.trainingList.length}
      rowHeight={TABLE_STYLES.rowHeight}
      rowGetter={rowGetter(props.trainingList)}
      rowRenderer={TrainingRowComponent}
      rowClassName={classNames.row}
      gridClassName={classNames.table}
    >
      <Column
        label="Active"
        dataKey="isActive"
        width={getSizeByPercentage(props.width, TABLE_STYLES.columnsWidthPercentage.isActive)}
      />
      <Column
        label="Name"
        dataKey="name"
        width={getSizeByPercentage(props.width, TABLE_STYLES.columnsWidthPercentage.name)}
      />
      <Column
        label="Start Date"
        dataKey="start"
        width={getSizeByPercentage(props.width, TABLE_STYLES.columnsWidthPercentage.start)}
      />
      <Column
        label="End Date"
        dataKey="end"
        width={getSizeByPercentage(props.width, TABLE_STYLES.columnsWidthPercentage.end)}
      />
    </Table>
  );
};

const rowGetter = (studentList) => ({ index }) => studentList[index];
