import * as React from 'react';
import { Link } from 'react-router';
const styles: any = require('./breadcrumb.scss');

interface Props extends React.Props<{}> {
  className?: string;
  href?: string;
  wrapOnly?: boolean;
  active?: boolean;
  right?: boolean;
  withoutSeparator?: boolean;
}

const getContent = (props: Props): React.ReactNode => {
  let children: React.ReactNode;
  if (props.wrapOnly) {
    children = props.children;
  } else if (props.active) {
    children = <span>{props.children}</span>;
  } else {
    children = <Link to={props.href}>{props.children}</Link>;
  }
  return children;
};

const getClassName = (props: Props): string => {
  let className = props.className;

  if (props.active) {
    className = `${className} active`;
  }

  if (props.right) {
    className = `${className} ${styles.rightItem}`;
  }

  if (props.withoutSeparator) {
    className = `${className} ${styles.withoutSeparator}`;
  }

  return className;
};

export const BreadcrumbItem: React.StatelessComponent<Props> = (props) => {
  const children = getContent(props);
  const className = getClassName(props);

  return (
    <li className={className}>
      {children}
    </li>
  );
};

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = {
  active: false,
  wrapOnly: false,
  className: '',
  href: '#',
  right: false,
  withoutSeparator: false,
};
