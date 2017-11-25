import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { CreateMarkdownRender, Mdr } from './render';

/**
 * TODO:
 * Custom rule to analyze "href" and render a <Link /> (react router) or <a />
 */

interface Props {
  content: string;
  registerRef?: (ref: HTMLElement) => void;
  className?: string;
  location?: any; // Router HOC injected.
}

interface State {
  mdr: Mdr;
}

class MarkDownViewer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      mdr: CreateMarkdownRender({routerLocation: props.location ? props.location.pathname : ''}),
    };
  }

  private nodeRef: HTMLDivElement = null;

  private setNodeRef = (input) => {
    this.nodeRef = input;
  }

  private markdownToHTML = () => {
    return {
      __html: this.state.mdr.render(this.props.content || ''),
    };
  }

  public render() {
    const {className = ''} = this.props;
    return(
      <div className={className} ref={this.props.registerRef  || (() => {})}
        dangerouslySetInnerHTML={this.markdownToHTML()} // See Footnote [1].
      />
    );
  }
};

const MarkDownViewerComponent = withRouter(MarkDownViewer);
export { MarkDownViewerComponent, Props as MarkDownViewerComponentProps }

// [1] WARNING: This conversion from plain HTML to JSX with
// dangerouslySetInnerHTML could be unsafe (script injection, XSS)
// depending whether markdown engine blocks malicious code or not.
// Markdonw-it is supposed to be XSS safe, but if you plan to
// change engine, ensure safety first!
