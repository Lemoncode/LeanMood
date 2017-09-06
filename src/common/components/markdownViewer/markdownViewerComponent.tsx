import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { SOURCE_LINE_CLASSNAME,
         getPixelOffsetForSourceLine,
         getSourceLineForPixelOffset } from './syncScroll';
import { CreateMarkdownRender, Mdr, MdrFactory,
         MdrSetup, MdrOptions, MdrCodeStyle } from './render';
import { throttle } from '../../../common/helper/limitExecution';

/**
 * TODO:
 * Custom rule to analyze "href" and render a <Link /> (react router) or <a />
 */

interface MarkDownViewerComponentProps {
  content: string;
  scrollSourceLine?: number;
  onScrollSourceLine?: (sourceLine) => any;
  className?: string;
  location?: any; // Router HOC injected.
  options?: MdrOptions;
  codeStyle?: MdrCodeStyle;
}

class MarkDownViewer extends React.Component<MarkDownViewerComponentProps, {}> {
  constructor(props) {
    super(props);
  }

  private CreateMdrInstance = () => {
    const setupParams: MdrSetup = {
      routerLocation: this.props.location ? this.props.location.pathname : '',
      options: this.props.options,
      codeStyle: this.props.codeStyle,
    };
    return CreateMarkdownRender(setupParams);
  }

  private mdr: Mdr = this.CreateMdrInstance();
  private scrollableContainerRef: HTMLElement = null;

  private setScrollableContainerRef = (input) => {
    this.scrollableContainerRef = input;
  }

  private markdownToMarkup = () => {
    return {
      __html: this.mdr.render(this.props.content || ''),
    };
  }

  private doScrollToSourceLine = (targetSourceLine) => {
    console.log(`Do scroll in preview: ${targetSourceLine}`);
    const renderedElements = ReactDOM.findDOMNode(this).getElementsByClassName(SOURCE_LINE_CLASSNAME);
    const scrollOffset = getPixelOffsetForSourceLine(renderedElements, targetSourceLine);
    const componentPosition = this.scrollableContainerRef.getBoundingClientRect().top;
    this.scrollableContainerRef.scrollTop += scrollOffset - ((componentPosition > 0) ? componentPosition : 0);
  }

  private getSourceLineForScroll = throttle(() => {
    const componentPosition = this.scrollableContainerRef.getBoundingClientRect().top;
    const renderedElements = ReactDOM.findDOMNode(this).getElementsByClassName(SOURCE_LINE_CLASSNAME);
    const lineNum = getSourceLineForPixelOffset(renderedElements, componentPosition > 0 ? componentPosition : 0);
    this.props.onScrollSourceLine(lineNum);
  }, 25);

  private handleScroll = (event) => {
    if (this.props.onScrollSourceLine) {
      this.getSourceLineForScroll();
    }
  }

  public shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.scrollSourceLine !== undefined && nextProps.scrollSourceLine !== this.props.scrollSourceLine) {
      this.doScrollToSourceLine(nextProps.scrollSourceLine);
      return false;
    }
    return true;
  }

  public componentWillUpdate(nextProps, nextState) {
    // New render instance upon render options update.
    if (nextProps.options !== this.props.options) {
      this.mdr = this.CreateMdrInstance();
    }
  }

  public render() {
    // Object destructuring to retrieve className with default value.
    const {className = ''} = this.props;
    // WARNING: This conversion from plain HTML to JSX with
    // dangerouslySetInnerHTML could be unsafe (script injection, XSS)
    // depending whether markdown engine blocks malicious code or not.
    // Markdonw-it is supposed to be XSS safe, but if you plan to
    // change engine, ensure safety first!
    return(
      <div className={className} ref={this.setScrollableContainerRef}
        dangerouslySetInnerHTML={this.markdownToMarkup()}
        onScroll={this.handleScroll}
      />
    );
  }
};

const MarkDownViewerComponent = withRouter(MarkDownViewer);
export { MarkDownViewerComponent, MarkDownViewerComponentProps }
