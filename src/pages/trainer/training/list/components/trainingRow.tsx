import * as React from 'react';
import { TableRowProps } from 'react-virtualized';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TableRowComponent } from '../../../../../common/components/virtualized/tableRow';
import * as moment from 'moment';

const classNames: any = require('./trainingRowStyles.scss');

export interface TrainingRowComponentProps extends TableRowProps {
  rowData: TrainingSummary;
}

// We can use spread operator for React properties too
// https://facebook.github.io/react/docs/jsx-in-depth.html#spread-attributes
export const TrainingRowComponent: React.StatelessComponent<TrainingRowComponentProps> = (props) => {
  return (
    <TableRowComponent
      {...props}
      className={`${props.className} ${classNames.rowStriped}`}
    >
      <input type="checkbox" disabled={true} checked={props.rowData.isActive} />
      <span>{props.rowData.name}</span>
      <span>{moment(props.rowData.start).format('DD/MM/YYYY')}</span>
      <span>{moment(props.rowData.end).format('DD/MM/YYYY')}</span>
    </TableRowComponent>
  );
};
