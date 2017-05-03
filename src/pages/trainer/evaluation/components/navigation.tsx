import * as React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, BreadcrumbItem, CounterButton } from '../../../../common/components';
const teachingImg: any = require('../../../../content/image/teaching.svg');
const styles: any = require('./navigation.scss');

export const NavigationBar: React.StatelessComponent<{}> = () => (
  <div>
    <Breadcrumb className={styles.navigation}>
      <BreadcrumbItem wrapOnly={true}>
        <img className={styles.navigationImg} src={teachingImg} alt="teaching logo" />
        <Link to="/trainer">Lemoncode</Link>
      </BreadcrumbItem>
      <BreadcrumbItem href="/trainer/training/list">My Trainings</BreadcrumbItem>
      <BreadcrumbItem href="/trainer/training/1/dashboard">Master Full Stack</BreadcrumbItem>
      <BreadcrumbItem active={true}>Exercise evaluation</BreadcrumbItem>
      <BreadcrumbItem wrapOnly={true} right={true} withoutSeparator={true}>
        <CounterButton
          logo="http://0.ptlp.co/resource-all/icon/svg/user.svg"
          total={18}
          text="Students"
        />
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
);

NavigationBar.displayName = 'NavigationBar';
