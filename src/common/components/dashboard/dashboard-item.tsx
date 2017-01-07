import * as React from "react";
import {Link} from "react-router";
import {DashboardIcons, mapOptionToIcon} from "./item-mapper";

export interface IDashboardItem {
  icon: DashboardIcons;
  name: string; // Text to be displayed
  reference: string; // link
}

export const DashboardItemComponent = (props: {item: IDashboardItem}) => {
  return (
      <div className="dashboard-item-content">
        <p className="dashboard-item-icon">
          <Link to={props.item.reference}>
            <i className={mapOptionToIcon(props.item.icon)} aria-hidden="true"/>
          </Link>
        </p>
        <p className="dashboard-item-title">
          <Link to={props.item.reference}>{props.item.name}</Link>
        </p>
      </div>
  );
};
