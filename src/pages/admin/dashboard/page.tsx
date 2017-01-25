import * as React from 'react';
import {
  DashboardComponent, DashboardItemComponent, IDashboardItem, DashboardIcons,
} from '../../../common/components/dashboard';
import {adminRouteEnums} from '../../../common/routeEnums/admin';

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {icon: DashboardIcons.students, name: 'Manage students', linkTo: adminRouteEnums.student.list},
    {icon: DashboardIcons.trainings, name: 'Manage trainings', linkTo: adminRouteEnums.training.list},
  ];

  public render() {
    return (
      <DashboardComponent
        title="ADMIN dashboard"
        items={this.dashboardItems}
      />
    );
  }
}
