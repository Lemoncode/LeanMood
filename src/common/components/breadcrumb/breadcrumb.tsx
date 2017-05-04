import * as React from 'react';

interface Props {
  className?: string;
}

export const Breadcrumb: React.StatelessComponent<Props> = ({className, children}) => {
  return (
    <ol className={`breadcrumb row ${className}`}>
      {children}
    </ol>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
