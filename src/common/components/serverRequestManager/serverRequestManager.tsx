import * as React from 'React';
import {isEqual} from 'lodash.lodash.isequal'

const command = (props) => {
  props.command(props.payload);
};

interface ServerRequestManagerProps  extends React.Props<ServerRequestManagerProps> {
   payload: any;
   command: (payload) => void;
}


export class ServerRequestManager extends React.Component<ServerRequestManagerProps, {}> {
  public componentWillMount() {
    command(this.props.payload);
  }

  public componentWillReceiveProps(newProps) {
    if (!isEqual(this.props.payload, newProps.payload)) {
      command(this.props.payload);
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
