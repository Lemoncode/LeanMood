import * as React from 'react';
import {ValidationComponent} from './validation';

interface IProps {
  name: string;
  label: string;
  value: string;
  type: string;
  placeholder?: string;
  error?: string;
  onChange: any;
  onBlur?: any;
}

export const InputComponent = (props: IProps) => {
  return (
    <ValidationComponent error={props.error}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </ValidationComponent>
  );
};
