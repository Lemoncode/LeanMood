import * as React from 'react';
import { ValidationComponent } from './validation';
import { CommonInputProps } from './';

export interface TextAreaComponentProps extends CommonInputProps {
  cols?: number;
  rows?: number;
  className?: string;
}

export const TextAreaComponent: React.StatelessComponent<TextAreaComponentProps> = (props) => {
  let className = 'form-control';
  if (props.className) {
    className = `${className} ${props.className}`;
  }
  return (
    <ValidationComponent error={props.error}>
      <label htmlFor={props.name} className={props.labelClassName}>
        {props.label}
      </label>
      <div className={props.wrapperClassName}>
        <textarea
          cols={props.cols}
          rows={props.rows}
          name={props.name}
          className={className}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </ValidationComponent>
  );
};

TextAreaComponent.displayName = 'TextAreaComponent';
