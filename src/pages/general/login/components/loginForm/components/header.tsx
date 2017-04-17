import * as React from 'react';

export const HeaderComponent = () => {
  return (
    <div className="panel-heading">
      <h3 className="panel-title">
        <p>Please sign in</p>
        <p>(login: admin | trainer | student / pwd: test)</p>
      </h3>
    </div>
  );
};
