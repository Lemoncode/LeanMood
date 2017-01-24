import * as React from 'react';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TrainingRowComponent } from './trainingRow';

interface IProps {
  trainingList: TrainingSummary[];
}

export const TrainingTableComponent = (props: IProps = { trainingList : [] }) => {
  return (
    <table>
      <tbody>
        {
          props.trainingList.map((training) =>
            <TrainingRowComponent key={training.id} training={training} />,
          )
        }
      </tbody>
    </table>
  );
};
