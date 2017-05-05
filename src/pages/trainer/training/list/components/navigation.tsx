import * as React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, BreadcrumbItem, CounterButton } from '../../../../../common/components';
const teachingImg: any = require('../../../../../content/image/teaching.svg');
const styles: any = require('../../../../../content/sass/components/navigation.scss');

export const NavigationBar: React.StatelessComponent<{}> = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem wrapOnly={true}>
        <img className={styles.navigationImg} src={teachingImg} alt="teaching logo" />
        <Link to="/trainer">Lemoncode</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active={true}>My Trainings</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

NavigationBar.displayName = 'NavigationBar';
