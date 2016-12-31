import * as React from "react";

import {DashboardComponent, IDashboardItem} from "../../../common/components/dashboard/index";
import {DashboardIcons} from "../../../common/components/dashboard/item-mapper";

let dashboardItems: IDashboardItem[] = [
  {icon: DashboardIcons.EDIT, name: "Students list", reference: "/admin/student/list"},
  {icon: DashboardIcons.EVALUATE, name: "Training list", reference: "/admin/training/list"}];

export class DashboardPage extends React.Component<{}, {}> {
  public render() {
    return (
      <DashboardComponent title="ADMIN dashboard" items={dashboardItems}/>
    );
  }
}
