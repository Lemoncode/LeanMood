
const SOURCE_LINE_CLASSNAME = 'sourceLine';
const SOURCE_LINE_ATTRIBUTE = 'line';

interface Candidate {
  line: number;
  element: Element;
}

enum Veredict {
  Behind = -1,
  Match = 0,
  InFront = 1,
}

type EvaluationFunction = (candidate: Candidate) => Veredict;

const isIntegerProperty = (property: string) => {
  return Number.isInteger(Number(property));
};

const getElementLine = (element: Element): number => {
  const slAttr = element.getAttribute(SOURCE_LINE_ATTRIBUTE);
  return isIntegerProperty(slAttr) ? Number(slAttr) : null;
};

const makeCandidate = (element: Element): Candidate => {
  return {
    line: getElementLine(element),
    element,
  };
};

const getOffset = (c: Candidate): number => {
  return c ? c.element.getBoundingClientRect().top : 0;
};

const getEvaluationFunctionForLine = (targetLine: number): EvaluationFunction => (candidate) => {
  return candidate.line ? Math.sign(candidate.line - targetLine) : null;
};

const getEvaluationFunctionForOffset = (targetOffset: number): EvaluationFunction => (candidate) => {
  return candidate.line ? Math.sign(getOffset(candidate) - targetOffset) : null;
};

const searchElement = (elementList: NodeListOf<Element>, evaluate: EvaluationFunction): Candidate[] => {
  let prev: Candidate = null;
  for (const element of elementList) {
    const current = makeCandidate(element);
    switch (evaluate(current)) {
      case Veredict.Match:
        return [current];
      case Veredict.InFront:
        return [prev, current];
      case Veredict.Behind:
        prev = current;
      default:
        continue;
    }
  }
  return [prev, null];
};

const interpolateOffset = (targetLine: number, [c1, c2]: Candidate[]): number => {
  const c1Offset = getOffset(c1);
  let offsetInBetween = 0;
  if (c1 && c2) {
    offsetInBetween = (targetLine - c1.line) * (getOffset(c2) - c1Offset) / (c2.line - c1.line);
  }
  return c1Offset + offsetInBetween;
};

const interpolateLine = (targetOffset: number, [c1, c2]: Candidate[]): number => {
  const c1Offset = getOffset(c1);
  let lineFraction = 0;
  if (c1 && c2) {
    lineFraction = (targetOffset - c1Offset) * (c2.line - c1.line) / (getOffset(c2) - c1Offset);
  }
  return c1.line + lineFraction;
};

// This offset represents the distance from the component top border where
// the synchronization happens. Fine tune it.
const PADDING_OFFSET = 0;

// For a given list of rendered elements (each element coming from a source line) and
// a target line, returns the viewport offset needed to reveal the element matching
// the target line. Offset will be interpolated if no exact match is achieved.
const calculateOffsetFromLine = (elementList: NodeListOf<Element>, targetLine: number): number => {
  const candidates = searchElement(elementList, getEvaluationFunctionForLine(targetLine));
  return interpolateOffset(targetLine, candidates) - PADDING_OFFSET;
};

// For a given list of rendered elements (each element coming from a source line) and
// a target offset, returns the line number of the element located in that target offset.
// In case no exact match is found, line number will be interpolated.
const calculateLineFromOffset = (elementList: NodeListOf<Element>, targetOffset: number): number => {
  const adjustedOffset = targetOffset + PADDING_OFFSET;
  const candidates = searchElement(elementList, getEvaluationFunctionForOffset(adjustedOffset));
  return interpolateLine(adjustedOffset, candidates);
};

export {
  SOURCE_LINE_CLASSNAME,
  SOURCE_LINE_ATTRIBUTE,
  calculateOffsetFromLine,
  calculateLineFromOffset,
};
