import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<NotFoundPage> {
}


export class NotFoundPage extends React.Component<Props, {}> {
   public render() {
       return (
          <div>
            <span> ****  SOMETHING WENT WRONG *** TODO: PLACE NICE 404 Page :P </span>
          </div>
       );
  }
}
