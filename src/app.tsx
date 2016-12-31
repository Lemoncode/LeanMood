import * as React from "react";

interface IProps extends React.Props<App> {
}

export class App extends React.Component<IProps, {}> {
   public render() {
       return (
         <div className="container-fluid">
          {this.props.children}
         </div>
       );
  }
}
