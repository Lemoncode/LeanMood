import * as React from 'react';
import {DashboardComponent, IDashboardItem, dashboardIcons} from '../../../common/components/dashboard';
import {adminRouteEnums} from '../../../common/routeEnums/admin';

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {icon: dashboardIcons.students, name: 'Manage students', linkTo: adminRouteEnums.student.list},
    {icon: dashboardIcons.trainings, name: 'Manage trainings', linkTo: adminRouteEnums.training.list},
  ];

  public render() {
    return (
      <DashboardComponent
        title="Admin dashboard"
        items={this.dashboardItems}
      />
    );
  }
}
