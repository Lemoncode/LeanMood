import * as React from 'react';
import {Link} from 'react-router';
import { studentRouteEnums } from '../../../../common/routeEnums/student';
import { TrainingSummary } from '../../../../model/trainingSummary';
import { TrainingTableComponent } from './components/trainingTable';
import { AutoSizer } from 'react-virtualized';

interface IProps extends React.Props<TrainingListPage> {
  trainingList: TrainingSummary[];
  studentId: number;
  fetchTrainings: (studentId: number) => void;
}

export class TrainingListPage extends React.Component<IProps, {}> {
  public componentDidMount() {
     this.props.fetchTrainings(this.props.studentId);
  }

  public render() {
    return (
      <div>
        <h1>My trainings</h1>
        <AutoSizer disableHeight={true}>
          {({ width }) => <TrainingTableComponent width={width} trainingList={this.props.trainingList} />}
        </AutoSizer>
        <Link to={studentRouteEnums.training}>Go to Training page</Link>
      </div>
    );
  }
}
