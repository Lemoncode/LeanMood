import * as React from 'react';
import { Link } from 'react-router';
import { TableRowProps } from 'react-virtualized';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TableRowComponent } from '../../../../../common/components/virtualized/tableRow';
import { studentRouteEnums } from '../../../../../common/routeEnums/student';
import * as moment from 'moment';

const classNames: any = require('./trainingRowStyles.scss');

interface Props extends TableRowProps {
  rowData: TrainingSummary;
}

// We can use spread operator for React properties too
// https://facebook.github.io/react/docs/jsx-in-depth.html#spread-attributes
export const TrainingRowComponent: React.StatelessComponent<Props> = (props) => {

  return (
    <TableRowComponent
      {...props}
      className={`${props.className} ${classNames.rowStriped}`}
    >
      <input type="checkbox" disabled={true} checked={props.rowData.isActive} />
      <Link to={`${studentRouteEnums.training.base}/${props.rowData.id}`}>{props.rowData.name}</Link>
      <span>{moment(props.rowData.start).format('DD/MM/YYYY')}</span>
      <span>{moment(props.rowData.end).format('DD/MM/YYYY')}</span>
    </TableRowComponent>
  );
};
