import * as React from 'react';
const styles: any = require('./dashboardStyles.scss');

interface IProps {
  title: string;
}

export class DashboardComponent extends React.Component<IProps, {}> {
  public render() {
    return(
      <div className={styles.dashboard}>
        <h3 className={styles.dashboardTitle}>{this.props.title}</h3>
        <div className={styles.dashboardItems}>
          {this.props.children}
        </div>
      </div>
    );
  }
};
