import * as React from 'react';
import {Link} from 'react-router';
import { AutoSizer } from 'react-virtualized';
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
        <h1 className="text-center">Active Trainigs</h1>
        <AutoSizer disableHeight={true}>
          {({ width }) => <TrainingTableComponent width={width} trainingList={this.props.trainingList} />} 
        </AutoSizer>
        <Link to={adminRouteEnums.training.edit}>Go to training Edit</Link>  
      </div>
    );
  }
}
