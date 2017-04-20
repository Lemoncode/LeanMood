import * as React from 'react';
import { marksy } from 'marksy';
import { Link } from 'react-router';
import { studentRouteEnums } from '../../../../common/routeEnums/student';
import { TrainingTOC } from '../../../../model/student/trainingToc';

const compile = marksy();

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
        <h2 className="text-center">{this.props.trainingTOC.name}</h2>
        <Link to={studentRouteEnums.training.list}>Back to training list</Link>
        {this.getMarkDownChildren()}
      </div>
    );
  }

  private getMarkDownChildren(): React.ReactNode {
    let childrenComponent: React.ReactNode = null;
    const { trainingTOC } = this.props;

    if (trainingTOC) {
      childrenComponent = compile(trainingTOC.content).tree;
    }

    return childrenComponent;
  }
}
