import * as React from 'react';
import { Link } from 'react-router';
import { studentRouteEnums } from '../../../../common/routeEnums/student/';

export class TrainingListPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <span>** Student list of Trainings Page: </span>

        {/* Temporary links */}
        <br />
        <br />
        <Link to={`${studentRouteEnums.training.base}/1`} >Go to training TOC with id 1</Link>
      </div>
    );
  }
}
