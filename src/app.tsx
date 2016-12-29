import * as React from 'react';
import {ProgressBarComponent} from './common/components/progressBar/progressBarComponent'

interface Props extends React.Props<App> {
}

export class App extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="container-fluid">
          {this.props.children}
          <ProgressBarComponent current={60}
          min={0} max={100}/>
         </div>
       );
  }
}
