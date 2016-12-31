import * as React from "react";
import {Link} from "react-router";

export const NotFoundBody = () => {
  return (
    /* tslint:disable */
    <div className="panel-body">
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please try the following:</p>
      <ul className="list-group">
        <li className="list-group-item">Make sure that the Web site address displayed in the address bar of your browser is spelled and formatted correctly.</li>
        <li className="list-group-item">If you reached this page by clicking a link,
          <a href="mailTo://info@lemoncode.net"><b>contact us</b></a> to alert us that the link is incorrectly formatted.</li>
        <li className="list-group-item">Forget that this ever happened, and go <Link to="/">our <b>Home</b> page</Link> :)</li>
      </ul>
    </div>
    /* tslint:enable */
  );
};
