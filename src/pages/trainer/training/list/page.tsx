import * as React from 'react';
import { TrainingSummary } from '../../../../model/trainingSummary';
import { TrainingTableComponent } from './components/trainingTable';
import { AutoSizer } from 'react-virtualized';
import { NavigationBar } from './components/navigation';
import { TrainingListProvider } from './trainingListProvider';

interface Props {
  trainingList: TrainingSummary[];
  trainerId: number;
}

export const TrainingListPage = (props) => {
  return (
    <div>
      <NavigationBar />
      <h1 className="text-center">My trainings</h1>
      <TrainingListProvider>
        <AutoSizer disableHeight={true}>
          {({ width }) => <TrainingTableComponent width={width} trainingList={props.trainingList} />}
        </AutoSizer>
      </TrainingListProvider>
    </div>
  );
};
