import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<NoMatchPage> {
}


export class NoMatchPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> ==Page Not found: </span>
         </div>
        );
  }
}
