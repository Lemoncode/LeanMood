import * as React from 'react';
import { Link } from 'react-router';
import { AutoSizer } from 'react-virtualized';
import { studentRouteEnums } from '../../../../common/routeEnums/student';
import { TrainingSummary } from '../../../../model/trainingSummary';
import { TrainingTableComponent } from './components/trainingTable';
import { NavigationBar } from './components/navigation';

interface IProps extends React.Props<TrainingListPage> {
  trainingList: TrainingSummary[];
  studentId: string;
  fetchTrainings: (studentId: string) => void;
}

export class TrainingListPage extends React.Component<IProps, {}> {
  public componentDidMount() {
     this.props.fetchTrainings(this.props.studentId);
  }

  public render() {
    return (
      <div>
        <NavigationBar />
        <h1>My trainings</h1>
        <AutoSizer disableHeight={true}>
          {({ width }) => <TrainingTableComponent width={width} trainingList={this.props.trainingList} />}
        </AutoSizer>
      </div>
    );
  }
}
