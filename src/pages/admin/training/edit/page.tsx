import * as React from 'react';
import {Link} from 'react-router';
import { TrainingEntity } from '../../../../model/training';


// interface Props {
//   params?: any,
//   training: TrainingEntity;
//   getTraining: (id: number) => void;
  
// }


export class EditTrainingPage extends React.Component<{}, {}> {
   public render() {
       return (
         <div>
           <span> Edit Training Page: </span>
           <br/>
           <br/>
           <Link to="/admin/training/list">Back to training list</Link>
           <Link to="/admin">Back to Dashboard</Link>

         </div>
        );
  }
}
