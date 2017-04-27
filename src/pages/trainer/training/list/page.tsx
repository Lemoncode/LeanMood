import * as React from 'react';
import { TrainingSummary } from '../../../../model/trainingSummary';
import { TrainingTableComponent } from './components/trainingTable';
import { AutoSizer } from 'react-virtualized';

interface Props {
  trainingList: TrainingSummary[];
  trainerId: number;
  fetchTrainingList: (trainerId: number) => void;
}

export class TrainingListPage extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.fetchTrainingList(this.props.trainerId);
  }

  public render() {
    return (
      <div>
        <h1 className="text-center">My trainings</h1>
        <AutoSizer disableHeight={true}>
          {({ width }) => <TrainingTableComponent width={width} trainingList={this.props.trainingList} />}
        </AutoSizer>
      </div>
    );
  }
}
