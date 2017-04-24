import * as React from 'react';

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}
