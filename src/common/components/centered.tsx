import * as React from 'react';

interface IProps {
  children?: any;
}

export const CenteredContainer = (props: IProps) => {
    return (
        <div className="container">
          <div className="row">
              <div className="col-md-4 col-md-offset-4">
                  <div className="panel panel-default">
                        {props.children}
                  </div>
              </div>
          </div>
      </div>
    );
};
