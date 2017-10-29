import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';

export interface CheckboxComponentProps {
  value: boolean;
  label: string;
  labelClassName: string;
  name: string;
  onChange: any;
}

export const CheckboxComponent: React.StatelessComponent<CheckboxComponentProps> = (props) => {
  return (
     <div>  
        <label htmlFor={props.name} className={props.labelClassName}>
        {props.label}
      </label>           
        <Checkbox  checked={props.value} onChange={props.onChange} /> 
     </ div>
  );
};

CheckboxComponent.displayName = 'CheckboxComponent';
