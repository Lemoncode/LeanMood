import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<Home> {
}


export default class Home extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <span> Home page</span>
          </div>
       );
  }
}
