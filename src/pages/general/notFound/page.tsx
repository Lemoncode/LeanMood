import * as React from 'react';
import {NotFoundHeader} from './components/header';
import {NotFoundBody} from './components/body';
const styles: any = require('./styles.scss');

export class NotFoundPage extends React.Component<{}, {}> {
  public render() {
     return (
         <div className={`row ${styles.pageError404}`}>
         <div className="col-md-8 col-md-offset-2">
           <div className="panel panel-danger">
             <NotFoundHeader />
             <NotFoundBody />
           </div>
         </div>
       </div>
     );
   }
 }
