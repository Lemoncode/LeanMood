import { MarkdownIt as Mdr } from 'markdown-it';

// Factory to build custom rules easily.
const CustomRuleFactory = (mdr: Mdr) => (name: string) => {
  const originalRule = mdr.renderer.rules[name];
  const customRule = {
    ruleName: name,
    rule: originalRule || mdr.renderer.renderToken.bind(mdr.renderer),
    replace(newRule) {
      this.rule = newRule;
      return this;
    },
    decorate(decorator) {
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
const sourceLineDecorator = (tokens, idx) => {
  // Injection only for root-children tokens (level 0).
  if (tokens[idx].map && tokens[idx].map.length && tokens[idx].level === 0) {
    tokens[idx].attrJoin('class', 'sourceLine');
    tokens[idx].attrSet('line', String(tokens[idx].map[0]));
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
        const id      = renderer.rules.footnote_anchor_name(tokens, idx, options, env, renderer);
        const caption = renderer.rules.footnote_caption(tokens, idx, options, env, renderer);
        let refid   = id;

        if (tokens[idx].meta.subId > 0) {
          refid += ':' + tokens[idx].meta.subId;
        }
        return `<sup class="footnote-ref"><a href="#${routerLocation}#fn${id}" id="fnref${refid}">${caption}</a></sup>`;
      }),
    CreateCustomRule('footnote_anchor').replace(
      (tokens, idx, options, env, renderer) => {
        let id = renderer.rules.footnote_anchor_name(tokens, idx, options, env, renderer);

        if (tokens[idx].meta.subId > 0) {
          id += ':' + tokens[idx].meta.subId;
        }
        /* ↩ with escape code to prevent display as Apple Emoji on iOS */
        return ` <a href="#${routerLocation}#fnref${id}" class="footnote-backref">\u21a9\uFE0E</a>`;
      }),
  ];

  customRules.forEach((item) => mdr.renderer.rules[item.ruleName] = item.rule);
};

export { loadCustomRules }
