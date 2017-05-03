import * as React from 'react';
import { Link } from 'react-router';
import { trainerRouteEnums } from '../../../common/routeEnums/trainer';
import { EvaluationFormComponent } from './components/evaluationForm';
import { StudentDeliveryListComponent } from './components/studentDeliveryList';
import { NavigationBar } from './components/navigation';

export class EvaluationPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <NavigationBar />
        <EvaluationFormComponent />
      </div>
    );
  }
}
