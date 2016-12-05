import * as React from 'react';
import {Header404} from './components/header404';
import {Body404} from './components/body404';

export const NotFoundPage = () => {
       return (
         <div className="row pageError404">
           <div className="col-md-8 col-md-offset-2">
             <div className="panel panel-danger">
               <Header404 />
               <Body404 />
             </div>
           </div>
         </div>
       );
}
