import * as React from 'react';
import {Link} from 'react-router';
import {trainerRouteEnums} from '../../../../common/routeEnums/trainer';

export class TrainingListPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> Choose training from training list (this page will be skipe if only one training): </span>
           <br/>
           <br/>
           <Link to={trainerRouteEnums.dashboard}>Go dashboard</Link>
         </div>
        );
  }
}
