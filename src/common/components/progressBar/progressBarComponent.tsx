import * as React from 'react';

interface IProps {
  current: number;
  max: number;
}

export const ProgressBarComponent = (props: IProps) => {
  return (
    <progress style={{ width: '100%' }} max={props.max} value={props.current} />
  );
};
