import * as React from "react";
import {Link} from "react-router";
import { TrainingSummary } from "../../../../model/trainingSummary";
import { TrainingTableComponent } from "../list/components/trainingTable";

interface IProps extends React.Props<ListTrainingPage> {
  trainingList: TrainingSummary[];
  fetchTrainings: () => void;
}

// <Link to="/students/training">Go to students</Link>
// <Link to="/students/training">Go to trainings</Link>
export class ListTrainingPage extends React.Component<IProps, {}> {
  public componentDidMount() {
     this.props.fetchTrainings();
  }

  public render() {
    return (
      <div>
        <TrainingTableComponent trainingList={this.props.trainingList}/>
        <Link to="/admin/training/edit">Go to training Edit</Link>
      </div>
    );
  }
}
