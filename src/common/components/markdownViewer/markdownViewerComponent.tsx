import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { SOURCE_LINE_CLASSNAME,
         calculateOffsetFromLine,
         calculateLineFromOffset } from './syncScroll';
import { CreateMarkdownRender, Mdr } from './render';


/**
 * TODO:
 * Custom rule to analyze "href" and render a <Link /> (react router) or <a />
 */

interface Props {
  content: string;
  scrollToLine?: number;
  onLineScroll?: (line) => any;
  className?: string;
  location?: any; // Router HOC injected.
  registerRef?: (ref) => void;
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

  // private convertLineToOffset = (line) => {
  //   const elements = this.nodeRef.getElementsByClassName(SOURCE_LINE_CLASSNAME);
  //   const lineOffset = calculateOffsetFromLine(elements, line);
  //   const componentPosition = this.nodeRef.getBoundingClientRect().top;
  //   return lineOffset - ((componentPosition > 0) ? componentPosition : 0);
  // }

  // private convertOffsetToLine = () => {
  //   const componentPosition = this.nodeRef.getBoundingClientRect().top;
  //   const elements = this.nodeRef.getElementsByClassName(SOURCE_LINE_CLASSNAME);
  //   return calculateLineFromOffset(elements, componentPosition > 0 ? componentPosition : 0);
  // }

  // private handleScroll = (event) => {
  //   if (this.props.onLineScroll) {
  //     console.log("        | NOTIFY");
  //     window.requestAnimationFrame(() => {
  //       this.props.onLineScroll(this.convertOffsetToLine());
  //     });
  //   }
  // }

  // private doScrollToLine = (targetLine) => {
  //   this.nodeRef.onscroll = null;
  //   this.nodeRef.scrollTop += this.convertLineToOffset(targetLine);
  //   window.requestAnimationFrame(() => {
  //     this.nodeRef.onscroll = this.handleScroll;
  //   });
  // }

  public componentDidMount() {
    this.props.registerRef(this.nodeRef);
  }

  // public shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.scrollToLine && nextProps.scrollToLine !== this.props.scrollToLine) {
  //     this.doScrollToLine(nextProps.scrollToLine);
  //     return false;
  //   }
  //   return true;
  // }

  // public componentWillUnmount() {
  //   this.nodeRef.onscroll = null;
  // }

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
