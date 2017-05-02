import * as React from 'react';
const teachingImg: any = require('../../../../../../content/image/teaching.svg');
const styles: any = require('./navigation.scss');

export const NavigationBar: React.StatelessComponent<{}> = () => (
  <div>
    <ol className={`breadcrumb ${styles.navigation}`}>
      <li>
        <img className={styles.navigationImg} src={teachingImg} alt="teaching logo" />
        <a href="#">Lemoncode</a>
      </li>
      <li>
        <a href="#">Master Full Stack</a>
      </li>
      <li className={styles.rightItem}>
        <div className={`btn-group ${styles.counterWrapper}`}>
          <div className={`btn ${styles.btnCounter}`}>
            <img src="http://0.ptlp.co/resource-all/icon/svg/user.svg" alt="icon" />
            Students
          </div>
          <div className={`btn ${styles.btnCounter}`}>18</div>
        </div>
      </li>
    </ol>
  </div>
);

NavigationBar.displayName = 'NavigationBar';
