import * as React from 'react';
import {DashboardComponent, DashboardItemComponent, IDashboardItem} from '../../../common/components/dashboard';

export class DashboardPage extends React.Component<{}, {}> {
  private dashboardItems: IDashboardItem[] = [
    {icon: 'fa fa-pencil-square-o fa-5x', name: 'Student list', linkTo: '/admin/student/list'},
    {icon: 'fa fa-star-half-o fa-5x', name: 'Training list', linkTo: '/admin/training/list'},
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
