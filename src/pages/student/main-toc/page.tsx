import * as React from 'react';
import {Link} from 'react-router';

export class MainTocPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> ##### Main Toc Page: </span>
           <br/>
           <br/>
           <Link to="students">Back to student"s trainings list (main page)</Link>
         </div>
        );
  }
}
