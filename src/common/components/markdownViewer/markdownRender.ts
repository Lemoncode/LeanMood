import MarkdownIt from 'markdown-it';
import { markdownRenderDefaultOptions, markdownRenderHighlight } from './markdownRenderDefaults';

// Some Helpful Typings
type RenderRule = (tokens: any[], idx: number, options: any, env: any, renderer: MarkdownIt) => string;

// List of render rules that should be injected with
// source line number to add support for synchronized scroll.
const lineInjectionTokenRules = [
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
const CreateMdRender = (options = markdownRenderDefaultOptions) => {
  // Setup.
  const md = new MarkdownIt(options);
  md.options['highlight'] = markdownRenderHighlight(md);

  // Setup rules to support line injection.
  for (const ruleName of lineInjectionTokenRules) {
    md.renderer.rules[ruleName] = lineInjectionGenericRule;
  }

  return md;
};

export { CreateMdRender }
