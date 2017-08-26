import * as React from 'react';
import { CreateMarkdownRender } from './render/markdownRender';

/**
 * TODO: Research custom components and rules. E.g.:
 * Custom rule to analyze "href" and render a <Link /> (react router) or <a />
 */

interface MarkDownViewerComponentProps {
  content: string;
  className?: string;
  renderOptions?: any;
}

class MarkDownViewerComponent extends React.Component<MarkDownViewerComponentProps, {}> {
  constructor(props) {
    super(props);
  }

  private mdr: any = CreateMarkdownRender(this.props.renderOptions);

  public componentWillUpdate(nextProps, nextState) {
    // New render instance upon render options update.
    if (nextProps.renderOptions !== this.props.renderOptions) {
      this.mdr = CreateMarkdownRender(this.props.renderOptions);
    }
  }

  private handleScroll = (event) => {
    console.log(`${event.target.scrollTop} pixels`);
  }

  public render() {
    // Object destructuring to retrieve className with default value.
    const {className = '', content} = this.props;
    // WARNING: This conversion from plain HTML to JSX with
    // dangerouslySetInnerHTML could be unsafe (script injection)
    // depending whether markdown engine blocks malicious code or not.
    // Markdonw-it is XSS safe, but if you plan to change engine,
    // make sure first!
    return(
      <div className={className}
        dangerouslySetInnerHTML={{__html: this.mdr.render(content)}}
        onScroll={this.handleScroll}
      />
    );
  }
};

export { MarkDownViewerComponentProps, MarkDownViewerComponent }
