import * as React from 'react';

const subscribe = (props: ServerRequestManagerProps) => {
  props.subscribe(props.payload);
};

const unsubscribe = (props: ServerRequestManagerProps) => {
  if (props.unsubscribe) {
    props.unsubscribe(props.payload);
  }
};

interface ServerRequestManagerProps  extends React.Props<ServerRequestManagerProps> {
   payload: any;
   subscribe: (payload) => void;
   unsubscribe?: (payload) => void;
}

export class ServerRequestManager extends React.Component<ServerRequestManagerProps, {}> {
  public componentWillMount() {
    subscribe(this.props);
  }

  public componentWillReceiveProps(newProps) {
    if (this.props.payload !== newProps.payload) {
      unsubscribe(this.props);
      subscribe(newProps);
    }
  }

  public componentWillUnmount() {
    unsubscribe(this.props);
  }

  public render() {
    return (
      <div>
       {this.props.children}
      </div>
    );
  }
}
