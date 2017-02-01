import * as React from 'react';
import {EditorContainerComponent} from './components/editorContainer';

interface IProps {
  trainingId: number;
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
