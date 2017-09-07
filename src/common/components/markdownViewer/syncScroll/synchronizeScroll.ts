
const SOURCE_LINE_CLASSNAME = 'sourceLine';
const SOURCE_LINE_ATTRIBUTE = 'line';
const SOURCE_LINE_HIGHLIGHT_CLASSNAME = 'highlightSourceLine';

interface Candidate {
  lineNum: number;
  element: Element;
}

interface CandidateSearch {
  exactMatch: boolean;
  candidate: Candidate;
  nextCandidate?: Candidate;
}

const isIntegerProperty = (property: string) => {
  return Number.isInteger(Number(property));
};

// Retrieve the candidate(s) elements that correspond to a certain
// source line for an input list of rendered elements.
const getRenderedElementsForSourceLine = (elementList: NodeListOf<Element>, targetLine: number): CandidateSearch => {
  let candidate: Candidate = null;
  if (elementList[0] && isIntegerProperty(elementList[0].getAttribute(SOURCE_LINE_ATTRIBUTE))) {
    candidate = {
      lineNum: Number(elementList[0].getAttribute(SOURCE_LINE_ATTRIBUTE)),
      element: elementList[0],
    };
  }

  for (const element of elementList) {
    const slAttr = element.getAttribute(SOURCE_LINE_ATTRIBUTE);
    if (isIntegerProperty(slAttr)) {
      const current: Candidate = { lineNum: Number(slAttr), element };
      if (current.lineNum === targetLine) {
        return { exactMatch: true, candidate: current };
      }
      else if (current.lineNum > targetLine) {
        return { exactMatch: false, candidate, nextCandidate: current };
      }
      candidate = current;
    }
  }
  return { exactMatch: false, candidate };
};

// Retrieve the candidate(s) elements that are located in a certain pixel offset
// position from an input list of rendered elements.
const getRenderedElementsForPixelOffset = (elementList: NodeListOf<Element>, targetOffset: number): CandidateSearch => {
    let candidate: Candidate = null;
    let lineFraction = 0;
    for (const element of elementList) {
      const slAttr = element.getAttribute(SOURCE_LINE_ATTRIBUTE);
      if (isIntegerProperty(slAttr)) {
        const boundingRect = element.getBoundingClientRect();
        const current: Candidate = { lineNum: Number(slAttr), element };
        if (boundingRect.top > targetOffset) {
          if (candidate && lineFraction < 1) {
            candidate.lineNum += lineFraction;
            return { exactMatch: true, candidate };
          }
          return { exactMatch: false, candidate, nextCandidate: current };
        }
        lineFraction = (targetOffset - boundingRect.top) / boundingRect.height;
        candidate = current;
      }
    }
    return { exactMatch: false, candidate };
};

// Fine tune this constant to place our reference 'marker' at a certain
// distance of the component top border.
const PADDING_OFFSET = 0;

// For a given list of rendered elements (each element coming from a source line) and
// a target line, returns the pixel offser for the viewport to show the element matching
// the target line.
const getPixelOffsetForSourceLine = (elementList: NodeListOf<Element>, targetLine: number): number => {
  const cs = getRenderedElementsForSourceLine(elementList, targetLine);
  if (cs.candidate && cs.candidate.element) {
    const inBetween = cs.nextCandidate ?
      (targetLine - cs.candidate.lineNum)
      * (cs.nextCandidate.element.getBoundingClientRect().top - cs.candidate.element.getBoundingClientRect().top)
      / (cs.nextCandidate.lineNum - cs.candidate.lineNum)
      : 0;
    return cs.candidate.element.getBoundingClientRect().top + inBetween - PADDING_OFFSET;
  }
  return 0;
};

// For a given list of rendered elements (each element coming from a source line) and
// a target offset, returns the line number of the element located in that target offset.
const getSourceLineForPixelOffset = (elementList: NodeListOf<Element>, targetOffset: number): number => {
  const adjustedOffset = targetOffset + PADDING_OFFSET;
  const cs = getRenderedElementsForPixelOffset(elementList, adjustedOffset);
  if (cs.candidate) {
    const inBetween = cs.nextCandidate ?
    (adjustedOffset - cs.candidate.element.getBoundingClientRect().top)
    / (cs.nextCandidate.element.getBoundingClientRect().top - cs.candidate.element.getBoundingClientRect().top)
    * (cs.nextCandidate.lineNum - cs.candidate.lineNum)
    : 0;
    return cs.candidate.lineNum + inBetween;
  }
  return 0;
};

export {
  SOURCE_LINE_CLASSNAME,
  SOURCE_LINE_ATTRIBUTE,
  getPixelOffsetForSourceLine,
  getSourceLineForPixelOffset,
};
