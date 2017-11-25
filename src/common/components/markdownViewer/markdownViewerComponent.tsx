import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { CreateMarkdownRender, Mdr } from './render';
import { setNodeCollection, updateLineOffsetMap } from './syncScroll';
import debounce from 'lodash.debounce';

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

  private setNodeRef = (ref) => {
    if (this.props.registerRef) {
      this.props.registerRef(ref);
      setNodeCollection(ref);
      updateLineOffsetMap();
    }
  }

  private markdownToHTML = () => {
    return {
      __html: this.state.mdr.render(this.props.content || ''),
    };
  }

  private updateSyncScrollMap = debounce(() => {
    updateLineOffsetMap();
  }, 1000, {leading: false, trailing: true});

  public shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>) {
    if (nextProps.content !== this.props.content) {
      this.updateSyncScrollMap();
    }
    return true;
  }

  public render() {
    const {className = ''} = this.props;
    return(
      <div className={className} ref={this.setNodeRef}
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
