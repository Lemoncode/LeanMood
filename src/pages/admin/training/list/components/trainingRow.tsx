import * as React from 'react';
import { TrainingSummary } from '../../../../../model/trainingSummary';

interface IProps {
  training: TrainingSummary;
}

export const TrainingRowComponent = (props: IProps) => {
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
};
