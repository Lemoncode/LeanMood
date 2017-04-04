import * as React from 'react';
import {EditorContainerComponent} from './components/editorContainer';
import {HeadingComponent} from './components/heading/heading';
const classNames: any = require('./pageStyles.scss');

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
      <div className={`container-fluid ${classNames.page}`}>
        <HeadingComponent className={classNames.heading} />
        <EditorContainerComponent className={classNames.editor} />
      </div>
    );
  }
}
