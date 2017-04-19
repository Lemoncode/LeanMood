import * as React from 'react';
import {EditorContainerComponent} from './components/editorContainer';
import {HeadingComponent} from './components/heading/heading';
const classNames: any = require('./pageStyles.scss');

interface Props {
  trainingId: number;
  fetchTrainingContent: (trainingId: number) => void;
}

export class EditTrainingPage extends React.Component<Props, {}> {
  public componentDidMount() {
    this.props.fetchTrainingContent(this.props.trainingId);
  }

  public render() {
    return (
      <div className={`container-fluid ${classNames.page}`}>
        <div className="col-md-10">
          <HeadingComponent className={`row ${classNames.heading}`} />
          <EditorContainerComponent className={`row ${classNames.editor}`} />
        </div>
      </div>
    );
  }
}
