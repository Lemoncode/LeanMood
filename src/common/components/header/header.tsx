import * as React from 'react';
import { Link } from 'react-router';
import { UserProfile } from '../../../model/userProfile';
const styles: any = require('./styles.scss');

interface Props {
  userProfile: UserProfile;
}

/* tslint:disable:max-line-length */
export const HeaderComponent: React.StatelessComponent<Props> = ({ userProfile }) => {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.info}>
        <img src={userProfile.avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.summary}>
          <div>{userProfile.fullname}</div>
          <div>{userProfile.role}</div>
        </div>
      </div>
      <div className={styles.actions}>
        <Link to="/" className="btn btn-default">
          <span>Logout </span>
          <span className={`${styles.btnIcon} glyphicon glyphicon-log-out`} />
        </Link>
      </div>
    </header>
  );
};
