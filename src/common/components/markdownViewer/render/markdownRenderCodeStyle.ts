// List of available code styles.
enum MdrCodeStyle {
  agate = 'agate',
  androidstudio = 'androidstudio',
  arduinoLight = 'arduino-light',
  arta = 'arta',
  ascetic = 'ascetic',
  atelierCaveDark = 'atelier-cave-dark',
  atelierCaveLight = 'atelier-cave-light',
  atelierDuneDark = 'atelier-dune-dark',
  atelierDuneLight = 'atelier-dune-light',
  atelierEstuaryDark = 'atelier-estuary-dark',
  atelierEstuaryLight = 'atelier-estuary-light',
  atelierForestDark = 'atelier-forest-dark',
  atelierForestLight = 'atelier-forest-light',
  atelierHeathDark = 'atelier-heath-dark',
  atelierHeathLight = 'atelier-heath-light',
  atelierLakesideDark = 'atelier-lakeside-dark',
  atelierLakesideLight = 'atelier-lakeside-light',
  atelierPlateauDark = 'atelier-plateau-dark',
  atelierPlateauLight = 'atelier-plateau-light',
  atelierSavannaDark = 'atelier-savanna-dark',
  atelierSavannaLight = 'atelier-savanna-light',
  atelierSeasideDark = 'atelier-seaside-dark',
  atelierSeasideLight = 'atelier-seaside-light',
  atelierSulphurpoolDark = 'atelier-sulphurpool-dark',
  atelierSulphurpoolLight = 'atelier-sulphurpool-light',
  atomOneDark = 'atom-one-dark',
  atomOneLight = 'atom-one-light',
  brownPaper = 'brown-paper',
  codepenEmbed = 'codepen-embed',
  colorBrewer = 'color-brewer',
  darcula = 'darcula',
  dark = 'dark',
  darkula = 'darkula',
  default = 'default',
  docco = 'docco',
  dracula = 'dracula',
  far = 'far',
  foundation = 'foundation',
  githubGist = 'github-gist',
  github = 'github',
  googlecode = 'googlecode',
  grayscale = 'grayscale',
  gruvboxDark = 'gruvbox-dark',
  gruvboxLight = 'gruvbox-light',
  hopscotch = 'hopscotch',
  hybrid = 'hybrid',
  idea = 'idea',
  irBlack = 'ir-black',
  kimbieDark = 'kimbie.dark',
  kimbieLight = 'kimbie.light',
  magula = 'magula',
  monoBlue = 'mono-blue',
  monokaiSublime = 'monokai-sublime',
  monokai = 'monokai',
  obsidian = 'obsidian',
  ocean = 'ocean',
  paraisoDark = 'paraiso-dark',
  paraisoLight = 'paraiso-light',
  pojoaque = 'pojoaque',
  purebasic = 'purebasic',
  qtcreator_dark = 'qtcreator_dark',
  qtcreator_light = 'qtcreator_light',
  railscasts = 'railscasts',
  rainbow = 'rainbow',
  routeros = 'routeros',
  schoolBook = 'school-book',
  solarizedDark = 'solarized-dark',
  solarizedLight = 'solarized-light',
  sunburst = 'sunburst',
  tomorrowNightNlue = 'tomorrow-night-blue',
  tomorrowNightNright = 'tomorrow-night-bright',
  tomorrowNightEighties = 'tomorrow-night-eighties',
  tomorrowNight = 'tomorrow-night',
  tomorrow = 'tomorrow',
  vs = 'vs',
  vs2015 = 'vs2015',
  xcode = 'xcode',
  xt256 = 'xt256',
  zenburn = 'zenburn',
}

// Change here code style by default.
const defaultCodeStyle = MdrCodeStyle.atomOneLight;

// Code style dynamic loader.
const loadCodeStyle = (style: MdrCodeStyle) => {
  return require(`highlight.js/styles/${style}.css`);
};

export { MdrCodeStyle, loadCodeStyle, defaultCodeStyle }