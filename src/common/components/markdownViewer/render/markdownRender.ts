import * as MdrObject from 'markdown-it';
import { MarkdownIt as Mdr } from 'markdown-it';
import { loadCustomRules } from './markdownRenderRules';
import { MdrOptions, defaultOptions, codeHighlighter } from './markdownRenderOptions';
import { MdrCodeStyle, loadCodeStyle, defaultCodeStyle } from './markdownRenderCodeStyle';
// Keep old import statements, otherwise it won't work with enzyme.
const mdrPluginAbbr = require('markdown-it-abbr');
const mdrPluginEmoji = require('markdown-it-emoji');
const mdrPluginFootnote = require('markdown-it-footnote');
const mdrPluginIns = require('markdown-it-ins');
const mdrPluginMark = require('markdown-it-mark');
const mdrPluginSub = require('markdown-it-sub');
const mdrPluginSup = require('markdown-it-sup');
const mdrPluginCheckbox = require('markdown-it-checkbox');

interface MdrSetup {
  routerLocation: string;
  options?: MdrOptions;
  codeStyle?: MdrCodeStyle;
}

type MdrFactory = (setupParams: MdrSetup) => Mdr;

// Markdown Render Factory. Create render instance and set it up.
const CreateMarkdownRender: MdrFactory = ({
  routerLocation,
  options = defaultOptions,
  codeStyle = defaultCodeStyle}) => {
    // Create instance with options+highlighter & load plugins.
    const mdr = new MdrObject({
      ...options,
      highlight: (str, lang) => codeHighlighter(mdr, str, lang),
    }).use(mdrPluginAbbr)
      .use(mdrPluginEmoji)
      .use(mdrPluginFootnote)
      .use(mdrPluginIns)
      .use(mdrPluginMark)
      .use(mdrPluginSub)
      .use(mdrPluginSup)
      .use(mdrPluginCheckbox);

    // Load custom rules.
    loadCustomRules(mdr, routerLocation);

    // Load code highlight style.
    loadCodeStyle(codeStyle);

    return mdr;
};

export { CreateMarkdownRender, Mdr, MdrFactory, MdrSetup }
