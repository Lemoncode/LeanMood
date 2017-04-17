import * as React from 'react';
import {Link} from 'react-router';
import {adminRouteEnums} from '../../../../common/routeEnums/admin';

export class EditStudentPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> Edit Student Page: </span>
           <br/>
           <br/>
           <Link to={adminRouteEnums.student.list}>Back to student list</Link>
           <Link to={adminRouteEnums.default}>Back to Dashboard</Link>
         </div>
        );
  }
}
