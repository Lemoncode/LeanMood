import * as React from 'react';
import {EditTrainingSummary} from '../../../../model/editTrainingSummary';

interface Props {
  training: EditTrainingSummary;
  fetchTrainingContent: (trainingId: number) => void
}

export class EditTrainingPage extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.fetchTrainingContent(this.props.training.id);
  }

  render() {
    return (
      <div></div>
    );
  }
}
