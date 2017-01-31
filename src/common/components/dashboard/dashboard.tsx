import * as React from 'react';
const classNames: any = require('./dashboardStyles.scss');
import {DashboardItemComponent, IDashboardItem} from './components/dashboardItem';

interface IProps {
  items: IDashboardItem[];
}

export class DashboardComponent extends React.Component<IProps, {}> {
  public render() {
    return(
      <div className={classNames.dashboard}>
        <div className={classNames.dashboardItems}>
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
