import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { SOURCE_LINE_CLASSNAME,
         getPixelOffsetForSourceLine,
         getSourceLineForPixelOffset } from './syncScroll';
import { CreateMarkdownRender, Mdr } from './render';
import { throttle } from '../../../common/helper/limitExecution';

/**
 * TODO:
 * Custom rule to analyze "href" and render a <Link /> (react router) or <a />
 */

interface Props {
  content: string;
  scrollSourceLine?: number;
  onScrollSourceLine?: (sourceLine) => any;
  className?: string;
  location?: any; // Router HOC injected.
}

interface State {
  mdr: Mdr;
  allowNotifyScroll: boolean;
}

class MarkDownViewer extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      mdr: CreateMarkdownRender({routerLocation: props.location ? props.location.pathname : ''}),
      allowNotifyScroll: true,
    };
  }

  private scrollableContainerRef: HTMLElement = null;

  private setScrollableContainerRef = (input) => {
    this.scrollableContainerRef = input;
  }

  private markdownToHTML = () => {
    return {
      __html: this.state.mdr.render(this.props.content || ''),
    };
  }

  private doScrollToSourceLine = (targetSourceLine) => {
    const renderedElements = ReactDOM.findDOMNode(this).getElementsByClassName(SOURCE_LINE_CLASSNAME);
    const scrollOffset = getPixelOffsetForSourceLine(renderedElements, targetSourceLine);
    const componentPosition = this.scrollableContainerRef.getBoundingClientRect().top;
    this.setState({
      ...this.state,
      allowNotifyScroll: false,
    });
    this.scrollableContainerRef.scrollTop += scrollOffset - ((componentPosition > 0) ? componentPosition : 0);
  }

  private notifySourceLine = throttle(() => {
    const componentPosition = this.scrollableContainerRef.getBoundingClientRect().top;
    const renderedElements = ReactDOM.findDOMNode(this).getElementsByClassName(SOURCE_LINE_CLASSNAME);
    const lineNum = getSourceLineForPixelOffset(renderedElements, componentPosition > 0 ? componentPosition : 0);
    this.props.onScrollSourceLine(lineNum);
  }, 25);

  private handleScroll = (event) => {
    if (this.state.allowNotifyScroll) {
      if (this.props.onScrollSourceLine) {
        this.notifySourceLine();
      }
    } else {
      this.setState({
        ...this.state,
        allowNotifyScroll: true,
      });
    }
  }

  public shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.scrollSourceLine !== undefined && nextProps.scrollSourceLine !== this.props.scrollSourceLine) {
      this.doScrollToSourceLine(nextProps.scrollSourceLine);
      return false;
    }
    return true;
  }

  public render() {
    const {className = ''} = this.props;
    return(
      <div className={className} ref={this.setScrollableContainerRef} // See Footnote [1].
        dangerouslySetInnerHTML={this.markdownToHTML()}
        onScroll={this.handleScroll}
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
