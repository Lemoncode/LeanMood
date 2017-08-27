import {EditTrainingSummary} from '../../model/trainer/editTrainingSummary';

export const trainingContentMockData: EditTrainingSummary[] = [
  {
    id: 1,
    content:
`# Markdown 8-)
## Feature Samples 

---

## Headings
---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules
---

___

---

***

## Typographic replacements
---

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis
---

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes
---


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists
---

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
  * Ac tristique libero volutpat at
  + Facilisis in pretium nisl aliquet
  - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code
---

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

## Code Syntax Highlighting

Javascript
\`\`\` js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
\`\`\`

HTML
\`\`\` html
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>
\`\`\`

CSS
\`\`\` css
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
\`\`\`


## Tables
---

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links
---

[link text](http://lemoncode.net)

[link with title](http://lemoncode.net "title text!")

Autoconverted link https://lemoncode.net (enable linkify to see)


## Images
---

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Footnotes
---

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

  and multiple paragraphs.

[^second]: Footnote text.


## Emojies
---

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)


## Subscript / Superscript / \<ins> / \<mark>
---

- 19^th^
- H~2~O
- ++Inserted text++
- ==Marked text==


## Checkboxes
---

Todo List:

[x] Buy some fruit

[ ] Go to gym


## Abbreviations
---

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language
`,
  },
  {
    id: 2,
    content: `
## Login

![login](https://raw.githubusercontent.com/wiki/MasterLemon2016/LeanMood/blob/leLogin.png)

## Lecturers trainings

![trainings](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leLecturerTrainings.png)

## Training Dashboard

![dashboard](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leTrainingDashboard.png)

## Main Toc Raw

![Main toc raw](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leMainTocRaw.png)

## Main Toc Preview

![Main toc preview](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leMainToc%20Preview.png)

## Upload File

This ui mock needs an update:

- It should follow the panel approach (no modal dialog).
- It should display a list of files already uploaded where the user can pick or let the user upload a new file.

![upload](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leUpload%20file.png)

## Add delivery

This ui mock needs an update:

- It should display a list of delveries already defined, and let the user create a new one if needed.

![Add Delivery](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leAddDelivery.png)

## Evaluate delivery

![Evaluate Delivery](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leEvaluate.png)
    `,
  },
  {
    id: 3,
    content: 'This is a test markdown sample using a **bold text**',
  },
];
