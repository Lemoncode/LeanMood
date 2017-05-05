import * as React from 'react';
const styles: any = require('./counterButton.scss');

interface Props {
  logo?: string;
  logoAlt?: string;
  text?: string;
  total: number;
}

export const CounterButton: React.StatelessComponent<Props> = (props) => {
  return (
    <span className={`btn-group ${styles.counterWrapper}`}>
      <button className={`btn ${styles.btnCounter}`}>
        <img src={props.logo} alt={props.logoAlt} />
        <span>{props.text}</span>
      </button>
      <button className={`btn ${styles.btnCounter}`}>{props.total}</button>
    </span>
  );
};

CounterButton.displayName = 'CounterButton';
CounterButton.defaultProps = {
  logo: '',
  logoAlt: '',
  text: '',
  total: NaN,
};
