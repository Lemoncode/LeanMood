import * as React from 'react';


const doCommand = (props: ServerRequestManagerProps) => {
  props.command(props.payload);
};

interface ServerRequestManagerProps  extends React.Props<ServerRequestManagerProps> {
   payload: any;
   command: (payload) => void;
}

export class ServerRequestManager extends React.Component<ServerRequestManagerProps, {}> {
  public componentWillMount() {
    doCommand(this.props);
  }

  public componentWillReceiveProps(newProps) {
    if (this.props.payload !== newProps.payload) {
      doCommand(this.props);
    }
  }

  public render() {
    return (
      <div>
       {this.props.children}
      </div>
    );
  }
}
