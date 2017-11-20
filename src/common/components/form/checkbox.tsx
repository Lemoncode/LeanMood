import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';

export interface CheckboxComponentProps {
  value: boolean;
  label: string;
  labelClassName: string;
  name: string;
  onChange: any;
  wrapperClassName?: string;
}

export const CheckboxComponent: React.StatelessComponent<CheckboxComponentProps> = (props) => {
  return (
    <div>
      <label htmlFor={props.name} className={props.labelClassName}>
        {props.label}
      </label>
      <div className={props.wrapperClassName}>
        <Checkbox checked={props.value} onChange={props.onChange} />
      </ div>
    </ div>
  );
};

CheckboxComponent.displayName = 'CheckboxComponent';
