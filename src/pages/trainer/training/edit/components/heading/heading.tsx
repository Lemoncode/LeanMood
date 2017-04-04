import * as React from 'react';

interface Props {
  className: string;
}

export const HeadingComponent: React.SFC<Props> = (props) => {
  return(
    <div className={`row ${props.className}`}>
      <div className="btn-group">
        <button type="button" className="btn btn-default">Raw</button>
        <button className="btn btn-default">Preview</button>
      </div>
      <button className="btn btn-default">Save</button>
    </div>
  );
};
