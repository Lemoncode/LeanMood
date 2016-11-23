import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<ListTrainingPage> {
}


//<Link to="/students/training">Go to students</Link>
//<Link to="/students/training">Go to trainings</Link>
export class ListTrainingPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> List Training Page: </span>
           <br/>
           <br/>
         </div>
        );
  }
}
