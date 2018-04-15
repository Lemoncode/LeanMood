import * as React from 'react';
import { Link } from 'react-router';
const styles: any = require('./tabContainerStyles.scss');

export const TabContainer: React.StatelessComponent<{}> = (props) => {
  return (
  <div className={styles.tabContainerPanel}>
    {props.children}
  </div>
  );
};

TabContainer.displayName = 'TabContainer';
