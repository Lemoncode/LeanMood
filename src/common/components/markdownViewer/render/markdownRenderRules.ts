import { MarkdownIt as Mdr, Token, TokenRender } from 'markdown-it';
import { SOURCE_LINE_CLASSNAME, SOURCE_LINE_ATTRIBUTE } from '../syncScroll';
import { isHashHistory } from '../../../../history';

interface CustomRule {
  ruleName: string;
  rule: TokenRender;
  replace(newRule: TokenRender): CustomRule;
  decorate(decorator: TokenRender): CustomRule;
}

// Factory to build custom rules easily.
const CustomRuleFactory = (mdr: Mdr) => (name: string) => {
  const originalRule: TokenRender = mdr.renderer.rules[name];
  const customRule: CustomRule = {
    ruleName: name,
    rule: originalRule || mdr.renderer.renderToken.bind(mdr.renderer) as TokenRender,
    replace(newRule: TokenRender) {
      this.rule = newRule;
      return this;
    },
    decorate(decorator: TokenRender) {
      const previousRule = this.rule;
      this.rule = (tokens, idx, options, env, renderer) => {
        decorator(tokens, idx, options, env, renderer);
        return previousRule(tokens, idx, options, env, renderer);
      };
      return this;
    },
  };

  return customRule;
};

// Decorator. It injects the source line number aimed for synch scroll.
const sourceLineDecorator: TokenRender = (tokens, idx) => {
  // Injection only for root-children tokens (level 0).
  if (tokens[idx].map && tokens[idx].map.length && tokens[idx].level === 0) {
    tokens[idx].attrJoin('class', SOURCE_LINE_CLASSNAME);
    tokens[idx].attrSet(SOURCE_LINE_ATTRIBUTE, String(tokens[idx].map[0]));
  }
};

// Load custom rules for a given markdown render.
const loadCustomRules = (mdr: Mdr, routerLocation: string) => {
  const CreateCustomRule = CustomRuleFactory(mdr);

  // Add here desired customized rules.
  // Keep source line number injection to all block elements for
  // the synch scroll to work properly.
  const customRules = [
    CreateCustomRule('hr').decorate(sourceLineDecorator),
    CreateCustomRule('heading_open').decorate(sourceLineDecorator),
    CreateCustomRule('paragraph_open').decorate(sourceLineDecorator),
    CreateCustomRule('image').decorate(sourceLineDecorator),
    CreateCustomRule('code_block').decorate(sourceLineDecorator),
    CreateCustomRule('fence').decorate(sourceLineDecorator),
    CreateCustomRule('blockquote_open').decorate(sourceLineDecorator),
    CreateCustomRule('list_item_open').decorate(sourceLineDecorator),
    CreateCustomRule('ordered_list_open').decorate(sourceLineDecorator),
    CreateCustomRule('bullet_list_open').decorate(sourceLineDecorator),
    CreateCustomRule('table_open').decorate(sourceLineDecorator)
      .decorate((tokens, idx) => {
        tokens[idx].attrJoin('class', 'table table-striped');
      }),
    CreateCustomRule('footnote_ref').replace(
      (tokens, idx, options, env, renderer) => {
        const id = renderer.rules.footnote_anchor_name(tokens, idx, options, env, renderer);
        const caption = renderer.rules.footnote_caption(tokens, idx, options, env, renderer);
        const refid = (tokens[idx].meta.subId > 0) ? id + ':' + tokens[idx].meta.subId : id;

        // Hash history hashed links: Host/#/route/page#elementID.
        // Browser history hashed links: #elementID.
        const hrefContent = (isHashHistory() ? `#${routerLocation}` : '') + `#fn${id}`;
        return `<sup class="footnote-ref"><a href="${hrefContent}" id="fnref${refid}">${caption}</a></sup>`;
      }),
    CreateCustomRule('footnote_anchor').replace(
      (tokens, idx, options, env, renderer) => {
        const id = renderer.rules.footnote_anchor_name(tokens, idx, options, env, renderer);
        const refid = (tokens[idx].meta.subId > 0) ? id + ':' + tokens[idx].meta.subId : id;

        const hrefContent = (isHashHistory() ? `#${routerLocation}` : '') + `#fnref${refid}`;
        /* ↩ with escape code to prevent display as Apple Emoji on iOS */
        return ` <a href="${hrefContent}" class="footnote-backref">\u21a9\uFE0E</a>`;
      }),
  ];

  customRules.forEach((item) => mdr.renderer.rules[item.ruleName] = item.rule);
};

export { loadCustomRules }
