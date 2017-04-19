import * as React from 'react';

interface Props {
  className: string;
}

export const HeadingComponent: React.StatelessComponent<Props> = ({className}) => {
  return(
    <div className={`${className}`}>
      <div className="btn-group">
        <button type="button" className="btn btn-default">Raw</button>
        <button className="btn btn-default">Preview</button>
      </div>
      <button className="btn btn-default pull-right">Save</button>
    </div>
  );
};
