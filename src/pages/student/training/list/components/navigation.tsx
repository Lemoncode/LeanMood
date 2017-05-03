import * as React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from '../../../../../common/components';
const teachingImg: any = require('../../../../../content/image/teaching.svg');
const styles: any = require('./navigation.scss');

export const NavigationBar: React.StatelessComponent<{}> = () => (
  <div>
    <Breadcrumb className={styles.navigation}>
      <BreadcrumbItem wrapOnly={true}>
        <img className={styles.navigationImg} src={teachingImg} alt="teaching logo" />
        <Link to="/student">Lemoncode</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active={true}>My Trainings</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

NavigationBar.displayName = 'NavigationBar';
