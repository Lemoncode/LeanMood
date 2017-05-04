import * as React from 'react';
import { marksy } from 'marksy';
import { Link } from 'react-router';
import { MarkDownViewerComponent } from '../../../../common/components/markdownViewer';
import { studentRouteEnums } from '../../../../common/routeEnums/student';
import { TrainingTOC } from '../../../../model/student/trainingToc';
import { NavigationBar } from './components/navigation';

export interface TrainingTOCPageProps {
  trainingId: number;
  trainingTOC: TrainingTOC;
  fetchTrainingTOC(trainingId: number): void;
}

export class TrainingTOCPage extends React.Component<TrainingTOCPageProps, {}> {
  private getTrainingTOC() {
    const { trainingId } = this.props;
    if (trainingId) {
      this.props.fetchTrainingTOC(trainingId);
    }
  }

  public componentDidMount() {
    this.getTrainingTOC();
  }

  public componentDidUpdate() {
    // Fetch the new training TOC when route changes
    if (this.props.trainingId !== this.props.trainingTOC.id) {
      this.getTrainingTOC();
    }
  }

  public render() {
    return (
      <div>
        <NavigationBar />
        <h2 className="text-center">{this.props.trainingTOC.name}</h2>
        <MarkDownViewerComponent content={this.props.trainingTOC.content} />
      </div>
    );
  }
}
