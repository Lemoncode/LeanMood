import * as React from 'react';
import { IMarkdownEntry } from '../../../../../../../model/trainer/markdownEntry';
const classNames: any = require('./buttonStyles.scss');

interface IProps {
  onClick: () => void;
}

export class ToolbarButton extends React.Component<IProps, {}> {

  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }
  private onClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  public render() {
    return (
      <button
        type="button"
        className={`btn btn-default ${classNames.commandButton}`}
        onClick={this.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
