import * as React from 'react';
import {DashboardComponent, DashboardItemComponent, IDashboardItem} from '../../../common/components/dashboard';
import {adminRouteEnums} from '../../../common/routeEnums/admin';

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {icon: 'fa fa-pencil-square-o fa-5x', name: 'Student list', linkTo: adminRouteEnums.student.list},
    {icon: 'fa fa-star-half-o fa-5x', name: 'Training list', linkTo: adminRouteEnums.training.list},
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
