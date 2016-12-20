import * as React from 'react';
import {NotFoundHeader} from './components/header';
import {NotFoundBody} from './components/body';
import {pageError404} from './styles.css';

export const NotFoundPage = () => {
       return (
         <div className={`row ${pageError404}`}>
           <div className="col-md-8 col-md-offset-2">
             <div className="panel panel-danger">
               <NotFoundHeader />
               <NotFoundBody />
             </div>
           </div>
         </div>
       );
}
