import * as React from 'react';

interface Props {
  onClick: (event: any) => void;
}

export class BaseToolbarButton extends React.Component<Props, {}> {
  render() {
    return (
      <button type="button" className="btn btn-default"
       onClick={(e) => this.props.onClick(e)}>
        {this.props.children}
     </button>
   );
  }
}
