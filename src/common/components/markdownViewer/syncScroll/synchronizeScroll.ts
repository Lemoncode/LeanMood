
const SOURCE_LINE_CLASSNAME = 'sourceLine';
const SOURCE_LINE_ATTRIBUTE = 'line';

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

export {
  SOURCE_LINE_CLASSNAME,
  SOURCE_LINE_ATTRIBUTE,
  getRenderedElementsForSourceLine,
};
