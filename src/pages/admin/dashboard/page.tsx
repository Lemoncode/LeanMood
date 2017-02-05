import * as React from 'react';
import {DashboardComponent, IDashboardItem, dashboardIcons} from '../../../common/components/dashboard';
import {adminRouteEnums} from '../../../common/routeEnums/admin';
const classNames: any = require('./pageStyles.scss');

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {icon: dashboardIcons.students, name: 'Manage students', linkTo: adminRouteEnums.student.list},
    {icon: dashboardIcons.trainings, name: 'Manage trainings', linkTo: adminRouteEnums.training.list},
  ];

  public render() {
    return (
      <div>
        <h3 className={classNames.title}>Admin dashboard</h3>
        <DashboardComponent
          items={this.dashboardItems}
        />
      </div>
    );
  }
}
