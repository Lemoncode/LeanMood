import * as React from 'react';
import { TrainingSummary } from '../../../../../model/trainingSummary';

interface Props {
  training: TrainingSummary;
}

export const TrainingRowComponent = (props : Props) => {
  return (
    <tr>
      <td>
        <span>{props.training.id}</span>
      </td>
      <td>
        <span>{props.training.name}</span>
      </td>
    </tr>
  );
}
