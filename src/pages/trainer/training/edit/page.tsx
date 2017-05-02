import * as React from 'react';
import { Link } from 'react-router';
import { EditorContainerComponent } from './components/editorContainer';
import { NavigationBar } from './components/navigation/navigation';
const styles: any = require('./page.scss');

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
      <div className={styles.editorContainer}>
        <NavigationBar />
        <EditorContainerComponent className={`${styles.editor} container-fluid`} />
      </div>
    );
  }
}
