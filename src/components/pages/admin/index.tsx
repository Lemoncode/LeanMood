import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<Admin> {
}


export class Admin extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <span> Company Admin Page: </span>
          </div>
       );
  }
}
