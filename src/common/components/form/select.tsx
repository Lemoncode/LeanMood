import * as React from 'react';
import { ValidationComponent } from './validation';
import { CommonInputProps } from './';

export const SelectComponent: React.StatelessComponent<CommonInputProps> = (props) => {
  return (
    <ValidationComponent error={props.error}>
      <label htmlFor={props.name} className={props.labelClassName}>
        {props.label}
      </label>
      <div className={props.wrapperClassName}>
        <select
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        >
          {props.children}
        </select>
      </div>
    </ValidationComponent>
  );
};

SelectComponent.displayName = 'SelectComponent';
