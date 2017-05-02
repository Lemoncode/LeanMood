import * as React from 'react';
import {ValidationComponent} from './validation';

export interface CommonInputProps {
  name: string;
  label: string;
  labelClassName?: string;
  wrapperClassName?: string;
  value: string | number;
  placeholder?: string;
  error?: string;
  onChange: any;
  onBlur?: any;
  disabled?: boolean;
}

export interface InputComponentProps extends CommonInputProps {
  type: string;
}

export const InputComponent: React.StatelessComponent<InputComponentProps> = (props) => {
  return (
    <ValidationComponent error={props.error}>
      <label htmlFor={props.name} className={props.labelClassName}>
        {props.label}
      </label>
      <div className={props.wrapperClassName}>
        <input
          type={props.type}
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          disabled={props.disabled}
        />
      </div>
    </ValidationComponent>
  );
};

InputComponent.displayName = 'InputComponent';
