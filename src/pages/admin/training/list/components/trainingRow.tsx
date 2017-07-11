import * as React from 'react';
import { Link } from 'react-router';
import { TableRowProps } from 'react-virtualized';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TableRowComponent } from '../../../../../common/components/virtualized/tableRow';
import { adminRouteEnums } from '../../../../../common/routeEnums/admin';

const classNames: any = require('./trainingRowStyles.scss');

interface Props extends TableRowProps {
  rowData: TrainingSummary;
}

export const TrainingRowComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <TableRowComponent
      {...props}
      className={`${props.className} ${classNames.rowStriped}`}
    >
      <input type="checkbox" disabled={true} checked={props.rowData.isActive} />
      <span>{props.rowData.name}</span>
      <div className={classNames.btnGroup}>
        <Link to={`${adminRouteEnums.training.edit}/${props.rowData.id}`} className="btn btn-primary">
          <i className="glyphicon glyphicon-pencil" />
        </Link>
        <button type="button" className="btn btn-warning">
          <i className="glyphicon glyphicon-duplicate" />
        </button>
        <button type="button" className="btn btn-danger">
          <i className="glyphicon glyphicon-trash" />
        </button>
      </div>
    </TableRowComponent>
  );
};
