import * as React from 'react';
import { PropTypes } from 'react';

const subscribe = (props: Props) => {
  props.subscribe(props.payload);
};

const unsubscribe = (props: Props) => {
  if (props.unsubscribe) {
    props.unsubscribe(props.payload);
  }
};

interface Props  extends React.Props<Props> {
   payload?: any | undefined;
   subscribe: (payload) => void;
   unsubscribe?: (payload) => void | undefined;
}

export class SubscriptionManager extends React.Component<Props, {}> {

  public static propTypes = {
    children: PropTypes.node.isRequired,
    payload: PropTypes.any,
    subscribe: PropTypes.func.isRequired,
    unsubscribe: PropTypes.func,
  };

  public static defaultProps: Partial<Props>  = {
    payload: undefined,
    unsubscribe: undefined,
  };

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
