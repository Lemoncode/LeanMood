import * as React from 'react';
import { Table, Column } from 'react-virtualized';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TrainingRowComponent } from './trainingRow';
import { getSizeByPercentage } from '../../../../../common/helper/percentage/getSizeByPercentage';

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
    fullName: 40,
    email: 30,
    actionsPanel: 20,
  },
};

 export const TrainingTableComponent: React.StatelessComponent<Props> = ({ width, trainingList }) => (
  <Table
    width={width}
    // height = {TABLE_STYLES.height}
  >
    <Column
      label="Active"
      dataKey="isActive"
      width={getSizeByPercentage(width, TABLE_STYLES.columnsWidthPercentage.isActive)}
    />
  </Table>
 );