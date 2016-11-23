import * as React from 'react';

interface Props extends React.Props<App> {
}

export class App extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="container-fluid">
          {this.props.children}
         </div>
       );
  }
}
