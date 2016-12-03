import * as React from 'react';
import {Link} from 'react-router';

interface Props extends React.Props<NotFoundPage> {
}


export class NotFoundPage extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="row">
           <br /><br /><br /><br />
           <div className="col-md-2">
           </div>
           <div className="col-md-8">
             <div className="panel panel-danger">
               <div className="panel-heading">
                 <h3 className="text-center">
                   <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Oops:
                   <small>Page not found - <b>404 error</b></small>
                 </h3>
               </div>
               <div className="panel-body">
                 <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please try the following:</p>
                 <ul className="list-group">
                   <li className="list-group-item">Make sure that the Web site address displayed in the address bar of your browser is spelled and formatted correctly.</li>
                   <li className="list-group-item">If you reached this page by clicking a link,
                     <a href="#"><b>contact us</b></a> to alert us that the link is incorrectly formatted.</li>
                   <li className="list-group-item">Forget that this ever happened, and go <Link to="/">our <b>Home</b> page</Link> :)</li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="col-md-2">
           </div>
         </div>
       );
  }
}
