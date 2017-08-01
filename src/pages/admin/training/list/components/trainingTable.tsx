import * as React from 'react';
import { Table, Column } from 'react-virtualized';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TrainingRowComponent } from './trainingRow';
import { getSizeByPercentage } from '../../../../../common/helper/percentage/getSizeByPercentage';
const classNames: any = require('./trainingTableStyles.scss');

interface Props {
  trainingList: TrainingSummary[];
  width: number;
}

const TABLE_STYLES = {
  height: 500,
  headerHeight: 40,
  rowHeight: 50,
  columnsWidthPercentage: {
    isActive: 10,
    name: 70,
    actionsPanel: 20,
  },
};

 export const TrainingTableComponent: React.StatelessComponent<Props> = ({ width, trainingList }) => (
  <Table
    width = {width}
    height = {TABLE_STYLES.height}
    headerHeight = {TABLE_STYLES.headerHeight}
    headerClassName={classNames.header}
    rowCount = {trainingList.length}
    rowHeight = {TABLE_STYLES.rowHeight}
    rowGetter = {rowGetter(trainingList)}
    rowClassName={classNames.row}
    rowRenderer={TrainingRowComponent}
    gridClassName={classNames.table}
  >
    <Column
      label = "Active"
      dataKey ="isActive"
      width = {getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.isActive)}
    />
    <Column
      label = "Name"
      dataKey = "name"
      width = {getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.name)}
    />
    <Column
      dataKey=""
      width={getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.actionsPanel)}
    />
  </Table>
 );

 const rowGetter = (trainingList) => ({ index }) => trainingList[index];
