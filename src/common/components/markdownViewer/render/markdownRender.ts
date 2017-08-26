import * as MarkdownIt from 'markdown-it';
import mdPluginAbbr from 'markdown-it-abbr';
import mdPluginEmoji from 'markdown-it-emoji';
import mdPluginFootnote from 'markdown-it-footnote';
import mdPluginIns from 'markdown-it-ins';
import mdPluginMark from 'markdown-it-mark';
import mdPluginSub from 'markdown-it-sub';
import mdPluginSup from 'markdown-it-sup';
import mdPluginCheckbox from 'markdown-it-checkbox';
import hljs from 'highlight.js/lib/highlight';
import { MdrCodeStyle, loadMdrCodeStyle } from './markdownRenderCodeStyle';
import { mdrDefaultOptions, mdrCodeHighlighter } from './markdownRenderOptions';
import { loadMdrCustomRules } from './markdownRenderRules';

// Markdown Render Factory. Create render instance and set it up.
const CreateMarkdownRender = (mdrOptions: MarkdownIt.Options = mdrDefaultOptions,
  mdrCodeStyle: MdrCodeStyle = MdrCodeStyle.atomOneLight) => {
    // Create instance with setup options, load plugins.
    const mdr = new MarkdownIt({
      ...mdrOptions,
      highlight: (str, lang) => mdrCodeHighlighter(mdr, str, lang),
    }).use(mdPluginAbbr)
      .use(mdPluginEmoji)
      .use(mdPluginFootnote)
      .use(mdPluginIns)
      .use(mdPluginMark)
      .use(mdPluginSub)
      .use(mdPluginSup)
      .use(mdPluginCheckbox);

    // Load custom rules.
    loadMdrCustomRules(mdr);

    // Load code highlight style.
    loadMdrCodeStyle(mdrCodeStyle);

    return mdr;
};

export { CreateMarkdownRender }
