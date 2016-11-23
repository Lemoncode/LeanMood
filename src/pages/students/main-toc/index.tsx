import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<MainTocPage> {
}


export class MainTocPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> ##### Main Toc Page: </span>
           <br/>
           <br/>
           <Link to="/trainings">Back to trainings</Link>
         </div>
        );
  }
}
