import * as React from 'react';
import MarkdownIt from 'markdown-it';
import { markdownDefaultRenderOptions } from './markdownRenderOptions';

// TODO: Research custom components and rules. E.g.:
// Custom rule to analyze "href" and render a <Link /> (react router) or <a />
// TODO: Image resizing when embedding pictures ¿? (CSS max-width. Tag img with style class).
// TODO: Code syntax highlight with highlight.js (a new dependency).

export interface MarkDownViewerComponentProps {
  content: string;
  className?: string;
  renderOptions?: any;
}

class MarkDownViewerComponent extends React.Component<MarkDownViewerComponentProps, {}> {
  constructor(props) {
    super(props);
  }

  public static defaultProps: Partial<MarkDownViewerComponentProps> = {
    renderOptions: markdownDefaultRenderOptions,
  };

  private CreateMdRender = (options = {}) => {
    return new MarkdownIt(options);
  }

  private MdRender: any = this.CreateMdRender(this.props.renderOptions);

  public componentWillUpdate(nextProps, nextState) {
    // New render instance upon render options update.
    if (nextProps.renderOptions !== this.props.renderOptions) {
      this.MdRender = this.CreateMdRender(this.props.renderOptions);
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
        dangerouslySetInnerHTML={{__html: this.MdRender.render(content)}}
      />
    );
  }
};

export { MarkDownViewerComponent }
