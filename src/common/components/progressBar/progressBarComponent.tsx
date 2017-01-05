import * as React from 'react';

interface IProps {
  current: number;
  max: number;
  min: number;
}

export const ProgressBarComponent = (props: IProps) => {
  return (
    <progress min={props.min} max={props.max} value={props.current} />
  );
};
