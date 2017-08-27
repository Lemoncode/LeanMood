import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import { CreateMarkdownRender, Mdr, MdrFactory,
         MdrSetup, MdrOptions, MdrCodeStyle } from './render';

/**
 * TODO: Research custom components and rules. E.g.:
 * Custom rule to analyze "href" and render a <Link /> (react router) or <a />
 */

interface MarkDownViewerComponentProps {
  content: string;
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
      routerLocation: this.props.location.pathname,
      options: this.props.options,
      codeStyle: this.props.codeStyle,
    };
    return CreateMarkdownRender(setupParams);
  }

  private mdr: Mdr = this.CreateMdrInstance();

  public componentWillUpdate(nextProps, nextState) {
    // New render instance upon render options update.
    if (nextProps.options !== this.props.options) {
      this.mdr = this.CreateMdrInstance();
    }
  }

  private markdownToMarkup = () => {
    return {
      __html: this.mdr.render(this.props.content),
    };
  }

  // TODO: Delete this **************
  public componentDidMount() {
    console.log("Mount Done");
    const blockList = ReactDOM.findDOMNode(this).getElementsByClassName('sourceLine');
    console.log(blockList);
  }
  public componentDidUpdate() {
    console.log("Update Done");
    console.log(this.props.children);
  }
  // ********************************

  private handleScroll = (event) => {
    // console.log(`${event.target.scrollTop} pixels`);
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
      <div className={className}
        dangerouslySetInnerHTML={this.markdownToMarkup()}
        onScroll={this.handleScroll}
      />
    );
  }
};

const MarkDownViewerComponent = withRouter(MarkDownViewer);
export { MarkDownViewerComponent, MarkDownViewerComponentProps }
