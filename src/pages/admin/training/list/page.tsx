import * as React from 'react';
import {Link} from 'react-router';
import { TrainingSummary } from '../../../../model/trainingSummary';
import { TrainingTableComponent } from '../list/components/trainingTable';
import {adminRouteEnums} from '../../../../common/routeEnums/admin';

interface IProps extends React.Props<ListTrainingPage> {
  trainingList: TrainingSummary[];
  fetchTrainings: () => void;
}

export class ListTrainingPage extends React.Component<IProps, {}> {
  public componentDidMount() {
     this.props.fetchTrainings();
  }

  public render() {
    return (
      <div>
        <TrainingTableComponent trainingList={this.props.trainingList}/>
        <Link to={adminRouteEnums.training.edit}>Go to training Edit</Link>
      </div>
    );
  }
}
