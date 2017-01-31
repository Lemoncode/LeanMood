import * as React from 'react';
import {Link} from 'react-router';
const classNames: any = require('./dashboardItemStyles.scss');

export interface IDashboardItem {
  icon: string;
  name: string;
  linkTo: string;
}

interface IProps {
  item: IDashboardItem;
  style?: React.CSSProperties;
}

export class DashboardItemComponent extends React.Component<IProps, {}> {
  public render() {
    return (
      <Link
        className={`btn btn-default ${classNames.item}`}
        style={{...this.props.style}}
        to={this.props.item.linkTo}
      >
        <i className={this.props.item.icon} />
        <h4 className={classNames.name}>{this.props.item.name}</h4>
      </Link>
    );
  }
};
