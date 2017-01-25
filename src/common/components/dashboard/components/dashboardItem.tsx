import * as React from 'react';
import {Link} from 'react-router';
const styles: any = require('./dashboardItemStyles.scss');

interface IProps {
  icon: string;
  name: string;
  linkTo: string;
}

export const DashboardItemComponent = (props: IProps) => {
  return (
    <div className={styles.dashboardItem}>
      <Link to={props.linkTo}>
        <i className={props.icon} />
        <p>{props.name}</p>
      </Link>
    </div>
  );
};
