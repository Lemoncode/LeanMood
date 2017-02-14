import * as React from 'react';

interface IProps {
  icon: string;
}

export const Icon = (props: IProps) => {
  return (
    <span className={props.icon} />
  );
};
