import * as React from 'react';
import {ValidationComponent} from './validation';

interface IProps {
  name: string;
  label: string;
  onChange: any;
  onBlur?: any;
  placeholder?: string;
  value: string;
  error?: string;
}

export const InputComponent = (props: IProps) => {
  return (
    <ValidationComponent error={props.error}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type="text"
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
