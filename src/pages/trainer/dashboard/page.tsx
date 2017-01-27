import * as React from 'react';
import {DashboardComponent, IDashboardItem, dashboardIcons} from '../../../common/components/dashboard';
import {trainerRouteEnums} from '../../../common/routeEnums/trainer';
const styles: any = require('./pageStyles.scss');

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {icon: dashboardIcons.evaluation, name: 'Student evaluation', linkTo: trainerRouteEnums.evaluation},
    {icon: dashboardIcons.trainings, name: 'Trainings', linkTo: trainerRouteEnums.default},
  ];
   public render() {
     return (
       <div>
         <h3 className={styles.title}>Trainer dashboard</h3>
         <DashboardComponent
           items={this.dashboardItems}
         />
       </div>
      );
  }
}
