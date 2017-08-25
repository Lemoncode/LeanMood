import * as MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/highlight';
import { MdrCodeStyle, loadMdrCodeStyle } from './markdownRenderCodeStyle';
import { mdrDefaultOptions, mdrHighlighter } from './markdownRenderOptions';

// List of render rules that should be injected with
// source line number to add support for synchronized scroll.
const lineInjectionRuleNames = [
  'paragraph_open',
  'heading_open',
  'image',
  'code_block',
  'blockquote_open',
  'list_item_open',
];

// Generic Render rule with line injection.
const lineInjectionGenericRule = (tokens, idx, options, env, renderer) => {
  // Injection only for root-children tokens (level 0).
  if (tokens[idx].map && tokens[idx].level === 0) {
    tokens[idx].attrJoin('class', 'renderedSourceLine');
    tokens[idx].attrSet('sourceLine', String(tokens[idx].map[0]));
  }
  return renderer.renderToken(tokens, idx, options, env, renderer);
};

// Markdown Render Factory. Create render instance and set it up.
const CreateMarkdownRender = (mdrOptions: MarkdownIt.Options = mdrDefaultOptions,
  mdrCodeStyle: MdrCodeStyle = MdrCodeStyle.atomOneLight) => {
    // Create instance, setup options, load plugins and style.
    const mdr = new MarkdownIt({...mdrOptions,
      highlight: (str, lang) => {
        return mdrHighlighter(mdr, str, lang);
      },
    });
    loadMdrCodeStyle(mdrCodeStyle);

    // Setup rules to support line injection.
    for (const ruleName of lineInjectionRuleNames) {
      mdr.renderer.rules[ruleName] = lineInjectionGenericRule;
    }

    return mdr;
};

export { CreateMarkdownRender }
