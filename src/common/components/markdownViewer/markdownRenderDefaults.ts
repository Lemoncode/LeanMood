import hljs from 'highlight.js/lib/highlight';

/**
 *  Markdown Render options.
 */
const markdownRenderDefaultOptions = {
  options: {
    html:         false,        // Enable HTML tags in source. This could be unsafe if enabled (XSS).
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      true,         // autoconvert URL-like texts to links
    maxNesting:   100,          // Internal protection, recursion limit
    // Enable some language-neutral replacements + quotes beautification
    typographer:  true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
  },

  components: {

    core: {},
    block: {},
    inline: {},
  },
};

const markdownRenderHighlight = (md) => (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
};

export { markdownRenderDefaultOptions, markdownRenderHighlight }
