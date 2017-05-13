import * as React from 'react';

const subscribe = (props: Props) => {
  props.subscribe(props.payload);
};

const unsubscribe = (props: Props) => {
  if (props.unsubscribe) {
    props.unsubscribe(props.payload);
  }
};

interface Props  extends React.Props<Props> {
   payload?: any;
   subscribe: (payload) => void;
   unsubscribe?: (payload) => void;
}

export class SubscriptionManager extends React.Component<Props, {}> {
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
