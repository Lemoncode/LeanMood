import * as React from 'react';
import {EditTrainingSummary} from '../../../../model/editTrainingSummary';

interface IProps {
  training: EditTrainingSummary;
  fetchTrainingContent: (trainingId: number) => void;
}

export class EditTrainingPage extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchTrainingContent(this.props.training.id);
  }

  public render() {
    return (
      <div></div>
    );
  }
}
