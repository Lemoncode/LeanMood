import * as React from 'react';
import { Link } from 'react-router';
import { TrainingSummary } from '../../../../model/trainingSummary';
import { TrainingTableComponent } from './components/trainingTable';
import { AutoSizer } from 'react-virtualized';
import { trainerRouteEnums } from '../../../../common/routeEnums/trainer';

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
        <Link to={trainerRouteEnums.dashboard}>Go to dashboard</Link>
        <AutoSizer disableHeight={true}>
          {({ width }) => <TrainingTableComponent width={width} trainingList={this.props.trainingList} />}
        </AutoSizer>
      </div>
    );
  }
}
