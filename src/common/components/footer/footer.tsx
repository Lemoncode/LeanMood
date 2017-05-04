import * as React from 'react';
import { Link } from 'react-router';
const styles: any = require('./footer.scss');
const logo: any = require('../../../content/image/logo.png');

export const FooterComponent: React.StatelessComponent<{}> = () => (
  <footer className={styles.footer}>
    <hr className={styles.separator} />
    <div className={styles.content}>
      <ul className={`list-unstyled ${styles.list}`}>
        <li>LeanMood powered by the Lemoncode Team</li>
        <li><Link to="/terms">Terms</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
      </ul>
      <img className={styles.logo} src={logo} alt="Lemoncode logo" />
      <ul className={`list-unstyled ${styles.list}`}>
        <li><a href="//lemoncode.net/services/en/contact">Contact Lemoncode</a></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </footer>
);
