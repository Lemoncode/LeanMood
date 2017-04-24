import * as React from 'react';
import {Link} from 'react-router';
import { studentRouteEnums } from '../../../common/routeEnums/student';

export class MainTocPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> ##### Main student TOC Page: </span>
           <br/>
           <br/>
           <Link to={studentRouteEnums.default}>Go to student's trainings list</Link>
         </div>
        );
  }
}
