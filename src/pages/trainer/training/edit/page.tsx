import * as React from 'react';
import {EditTrainingSummary} from '../../../../model/editTrainingSummary';
import {EditorContainerComponent} from './components/editorContainer';

interface IProps {
  trainingId: number;
  training: EditTrainingSummary;
  fetchTrainingContent: (trainingId: number) => void;
}

export class EditTrainingPage extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchTrainingContent(this.props.trainingId);
  }

  public render() {
    return (
      <div>
        <EditorContainerComponent />
      </div>
    );
  }
}
