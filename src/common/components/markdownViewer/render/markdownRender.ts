import * as MdrObject from 'markdown-it';
import { MarkdownIt as Mdr } from 'markdown-it';
import mdrPluginAbbr from 'markdown-it-abbr';
import mdrPluginEmoji from 'markdown-it-emoji';
import mdrPluginFootnote from 'markdown-it-footnote';
import mdrPluginIns from 'markdown-it-ins';
import mdrPluginMark from 'markdown-it-mark';
import mdrPluginSub from 'markdown-it-sub';
import mdrPluginSup from 'markdown-it-sup';
import mdrPluginCheckbox from 'markdown-it-checkbox';
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

export { CreateMarkdownRender, Mdr, MdrFactory, MdrSetup }
