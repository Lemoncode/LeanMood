import * as React from 'react';
const styles: any = require('./dashboardStyles.scss');
import {DashboardItemComponent, IDashboardItem} from './components/dashboardItem';

interface IProps {
  title: string;
  items: IDashboardItem[];
}

export class DashboardComponent extends React.Component<IProps, {}> {
  public render() {
    return(
      <div className={styles.dashboard}>
        <h3 className={styles.dashboardTitle}>{this.props.title}</h3>
        <div className={styles.dashboardItems}>
          {
            this.props.items.map((item) =>
              <DashboardItemComponent
                style={this.getItemsPerRowStyle(this.props.items)}
                key={item.name}
                item={item}
              />,
            )
          }
        </div>
      </div>
    );
  }

  private getItemsPerRowStyle(items: IDashboardItem[]): React.CSSProperties {
    const maxItemsPerRow = 3;

    return items.length >= maxItemsPerRow ?
      {flexBasis: `${100 / maxItemsPerRow}%`} :
      {flexBasis: `${100 / items.length}%`};
  }
};
