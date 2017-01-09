import * as React from 'react';
import {Link} from 'react-router';
import { Training } from '../../../../model/training';
import { TrainingForm } from './components/trainingForm';

interface IProps {
  params?: any;
  editTraining: Training;
  getTraining: (id: number) => void;
}

export class EditTrainingPage extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }
  public componentDidMount() {
    const trainingId = Number(this.props.params.id);
    this.props.getTraining(trainingId);
  }

  public render() {
    if ( !this.props.editTraining ) {
      return (
        <div>
          <span>Training info loading...</span>
          <br/>
          <br/>
          <Link to="/admin/training/list">Back to training list</Link>
          <Link to="/admin">Back to Dashboard</Link>
        </div>
      );
    }
    return (
      <div>
        <TrainingForm training={this.props.editTraining} />
        <br/>
        <br/>
        <div className="row col-xs-12">
        <Link to="/admin/training/list">Back to training list</Link>
        <Link to="/admin">Back to Dashboard</Link>
        </div>
      </div>
    );
  }
}
