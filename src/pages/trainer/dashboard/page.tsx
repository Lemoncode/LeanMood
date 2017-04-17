import * as React from 'react';
import {Link} from 'react-router';
import {DashboardComponent, IDashboardItem, dashboardIcons} from '../../../common/components/dashboard';
import {trainerRouteEnums} from '../../../common/routeEnums/trainer';
const classNames: any = require('./pageStyles.scss');

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {icon: dashboardIcons.evaluation, name: 'Student evaluation', linkTo: trainerRouteEnums.evaluation},
    {icon: dashboardIcons.trainings, name: 'Trainings', linkTo: trainerRouteEnums.default},
    {icon: dashboardIcons.training, name: 'Edit training content', linkTo: `${trainerRouteEnums.training.edit}/1`},
  ];
   public render() {
     return (
       <div>
         <h3 className={classNames.title}>Trainer dashboard</h3>
         <DashboardComponent
           items={this.dashboardItems}
         />
       </div>
      );
  }
}
