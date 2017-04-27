import * as React from 'react';
import { Link } from 'react-router';
import { trainerRouteEnums } from '../../../common/routeEnums/trainer';

export class EvaluationPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <span>--- Evaluation page: </span>
        <br />
        <br />
        <Link to={`${trainerRouteEnums.training.base}/1/dashboard`}>Go back to dashboard</Link>
      </div>
    );
  }
}
