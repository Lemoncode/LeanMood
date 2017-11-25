
const SOURCE_LINE_CLASSNAME = 'sourceLine';
const SOURCE_LINE_ATTRIBUTE = 'line';

interface LineOffset {
  line: number;
  offset: number;
}

enum Veredict {
  Smaller = -1,
  Match = 0,
  Greater = 1,
}

const isIntegerProperty = (property: string) => {
  return Number.isInteger(Number(property));
};

const getElementLine = (element: Element): number => {
  const slAttr = element.getAttribute(SOURCE_LINE_ATTRIBUTE);
  return isIntegerProperty(slAttr) ? Number(slAttr) : null;
};

let nodeCollection: NodeListOf<Element> = null;

const setNodeCollection = (parentRef: HTMLElement) => {
  nodeCollection = parentRef.getElementsByClassName(SOURCE_LINE_CLASSNAME);
};

let lineOffsetMap: LineOffset[] = [];

const updateLineOffsetMap = () => {
  lineOffsetMap = [];
  for (const item of nodeCollection) {
    const line = getElementLine(item);
    if (line) {
      lineOffsetMap.push({
        line,
        offset: item.getBoundingClientRect().top,
      });
    }
  }
};

const convertRangedValue = (value: number, min: number, max: number) => (targetMin: number, targetMax: number) => {
  return (value - min) / (max - min) * (targetMax - targetMin) + targetMin;
};

const mapBy = (field: string, value: number): number => {
  const targetField = (field === 'line') ? 'offset' : 'line';
  let prev: LineOffset = {line: 0, offset: 0};
  for (const element of lineOffsetMap) {
    switch (Math.sign(element[field] - value)) {
      case Veredict.Match:
        return element[targetField];
      case Veredict.Greater:
        return convertRangedValue(value, prev[field], element[field])(prev[targetField], element[targetField]);
      case Veredict.Smaller:
        prev = element;
      default:
        continue;
    }
  }
  return prev[targetField];
};

const mapLineToOffset = (line: number) => {
  return mapBy('line', line);
};

const mapOffsetToLine = (offset: number) => {
  return mapBy('offset', offset);
};

export {
  SOURCE_LINE_CLASSNAME,
  SOURCE_LINE_ATTRIBUTE,
  setNodeCollection,
  updateLineOffsetMap,
  mapLineToOffset,
  mapOffsetToLine,
}
