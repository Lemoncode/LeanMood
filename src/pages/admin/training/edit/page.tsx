import * as React from 'react';
import {Link} from 'react-router';
import {adminRouteEnums} from '../../../../common/routeEnums/admin';

export class EditTrainingPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> Edit Training Page: </span>
           <br/>
           <br/>
           <Link to={adminRouteEnums.training.list}>Back to training list</Link>
           <Link to={adminRouteEnums.default}>Back to Dashboard</Link>
         </div>
        );
  }
}
