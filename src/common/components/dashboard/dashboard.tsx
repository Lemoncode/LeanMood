import * as React from "react";
import {DashboardItemComponent, IDashboardItem} from "./dashboard-item";

export const DashboardComponent = (props: {title: string,
  items: IDashboardItem[]}) => {
  return (
    <div className="dashboard">
      <div className="dashboard-title">
          <h3>{props.title}</h3>
      </div>
      <div className="dashboard-items">
      {props.items.map(
        (item: IDashboardItem) => {
          return (
          <div className="dashboard-item" key={item.name}>
            <DashboardItemComponent item={item}/>
          </div>
        );
      })}
      </div>
    </div>
  );
};
