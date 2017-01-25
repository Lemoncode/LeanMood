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
                style={this.getStyleByItems(this.props.items)}
                key={item.name}
                item={item}
              />,
            )
          }
        </div>
      </div>
    );
  }

  private getStyleByItems(items: IDashboardItem[]): React.CSSProperties {
    return items.length >= 3 ?
      {flexBasis: '33.33%'} :
      {flexBasis: `${100 / items.length}%`};
  }
};
