import * as React from 'react';
import {Link} from 'react-router';


interface Props extends React.Props<StudentsPage> {
}


export class StudentsPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> Students page: </span>
           <br/>
           <br/>
           <Link to="/home">Go to home page</Link>
           <Link to="/students/training">Go to edit training</Link>
         </div>
        );
  }
}
