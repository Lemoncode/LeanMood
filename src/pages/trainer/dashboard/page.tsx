import * as React from 'react';
import { Link } from 'react-router';
import { DashboardComponent, IDashboardItem, dashboardIcons } from '../../../common/components/dashboard';
import { trainerRouteEnums } from '../../../common/routeEnums/trainer';
const styles: any = require('./pageStyles.scss');

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {
      icon: dashboardIcons.evaluation,
      name: 'Student evaluation',
      linkTo: `${trainerRouteEnums.training.base}/1/evaluation`,
    },
    {
      icon: dashboardIcons.training,
      name: 'Edit training content',
      linkTo: `${trainerRouteEnums.training.base}/1/edit`,
    },
  ];
  public render() {
    return (
      <div className={styles.container}>
        <Link to={trainerRouteEnums.training.list}>Go back to training list</Link>
        <h3 className={styles.title}>Trainer dashboard</h3>
        <DashboardComponent
          items={this.dashboardItems}
        />
      </div>
    );
  }
}
