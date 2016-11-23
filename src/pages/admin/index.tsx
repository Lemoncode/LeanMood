import * as React from 'react';
import {Link} from 'react-router';
import {AdminRoutes} from './adminRoutes';

interface Props extends React.Props<Admin> {
}


class Admin extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <span> Company Admin Page: </span>
          </div>
       );
  }
}

export {
  Admin,
  AdminRoutes
}