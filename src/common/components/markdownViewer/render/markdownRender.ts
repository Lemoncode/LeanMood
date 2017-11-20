import { MarkdownIt as Mdr } from 'markdown-it';
import * as MdrObject from 'markdown-it';
import * as mdrPluginAbbr from 'markdown-it-abbr';
import * as mdrPluginEmoji from 'markdown-it-emoji';
import * as mdrPluginFootnote from 'markdown-it-footnote';
import * as mdrPluginIns from 'markdown-it-ins';
import * as mdrPluginMark from 'markdown-it-mark';
import * as mdrPluginSub from 'markdown-it-sub';
import * as mdrPluginSup from 'markdown-it-sup';
import * as mdrPluginCheckbox from 'markdown-it-checkbox';
import { loadCustomRules } from './markdownRenderRules';
import { MdrOptions, defaultOptions, codeHighlighter } from './markdownRenderOptions';
import { MdrCodeStyle, loadCodeStyle, defaultCodeStyle } from './markdownRenderCodeStyle';

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

export { CreateMarkdownRender, MdrFactory, MdrSetup, Mdr }
