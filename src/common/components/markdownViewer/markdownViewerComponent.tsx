import * as React from 'react';
import { CreateMdRender } from './markdownRender';

/**
 * TODO: Research custom components and rules. E.g.:
 * Custom rule to analyze "href" and render a <Link /> (react router) or <a />
 * TODO: Image resizing when embedding pictures ¿? (CSS max-width. Tag img with style class).
 * TODO: Code syntax highlight with highlight.js (a new dependency).
 */

export interface MarkDownViewerComponentProps {
  content: string;
  className?: string;
  renderOptions?: any;
}

class MarkDownViewerComponent extends React.Component<MarkDownViewerComponentProps, {}> {
  constructor(props) {
    super(props);
  }

  private md: any = CreateMdRender(this.props.renderOptions);

  public componentWillUpdate(nextProps, nextState) {
    // New render instance upon render options update.
    if (nextProps.renderOptions !== this.props.renderOptions) {
      this.md = CreateMdRender(this.props.renderOptions);
    }
  }

  public render() {
    // Object destructuring to retrieve className with default value.
    const {className = '', content} = this.props;
    // TODO: This conversion from plain HTML to JSX with
    // dangerouslySetInnerHTML could be unsafe (script injection)
    // depending on the parsing done by the Markdown-it renderer.
    // Markdonw-it is supposed to be XSS safe, but just in case, make sure.
    return(
      <div className={className}
        dangerouslySetInnerHTML={{__html: this.md.render(content)}}
      />
    );
  }
};

export { MarkDownViewerComponent }
