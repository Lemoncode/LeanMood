import * as React from 'react';

import { TableRowProps } from 'react-virtualized';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TableRowComponent } from '../../../../../common/components/virtualized/tableRow';


interface Props extends TableRowProps {
  rowData: TrainingSummary;
}

export const TrainingRowComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <TableRowComponent
      {...props}
    >
      <input type="checkbox" disabled={true} checked={props.rowData.isActive} />
      <span>{props.rowData.name}</span>
      <span>{props.rowData.start}</span>
      <span>{props.rowData.end}</span>
    </TableRowComponent>  
  );
};
