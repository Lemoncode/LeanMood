import * as React from 'react';
import { Link } from 'react-router';
import { trainerRouteEnums } from '../../../common/routeEnums/trainer';
import { EvaluationFormComponent } from './components/evaluationForm';
import { StudentDeliveryListComponent } from './components/studentDeliveryList';
const styles: any = require('./page.scss');

export class EvaluationPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={styles.container}>
        <Link to={`${trainerRouteEnums.training.base}/1/dashboard`}>Go back to dashboard</Link>
        <EvaluationFormComponent />
      </div>
    );
  }
}
