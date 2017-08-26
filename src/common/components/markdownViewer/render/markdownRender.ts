import * as MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/highlight';
import { MdrCodeStyle, loadMdrCodeStyle } from './markdownRenderCodeStyle';
import { mdrDefaultOptions, mdrCodeHighlighter } from './markdownRenderOptions';
import { loadMdrCustomRules } from './markdownRenderRules';

// Markdown Render Factory. Create render instance and set it up.
const CreateMarkdownRender = (mdrOptions: MarkdownIt.Options = mdrDefaultOptions,
  mdrCodeStyle: MdrCodeStyle = MdrCodeStyle.atomOneLight) => {
    // Create instance, setup options, load plugins.
    const mdr = new MarkdownIt({
      ...mdrOptions,
      highlight: (str, lang) => mdrCodeHighlighter(mdr, str, lang),
    });

    // Load custom rules.
    loadMdrCustomRules(mdr);

    // Load code highlight style.
    loadMdrCodeStyle(mdrCodeStyle);

    return mdr;
};

export { CreateMarkdownRender }
