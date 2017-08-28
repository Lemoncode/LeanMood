
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

// Retrieve candidate rendered element/node that correspond to a
// certain source line for an input collection of rendered nodes.
const getRenderedNodesForSourceLine = (collection: Element[], targetLine: number): CandidateSearch => {
  let candidate: Candidate = null;
  if (collection[0] && collection[0].getAttribute(SOURCE_LINE_ATTRIBUTE)) {
    candidate = {
      lineNum: Number(collection[0].getAttribute(SOURCE_LINE_ATTRIBUTE)),
      element: collection[0]
    };
  }

  for (const element of collection) {
    const current: Candidate = {
      lineNum: Number(element.getAttribute(SOURCE_LINE_ATTRIBUTE)),
      element,
    };
    if (current.lineNum) {
      if (current.lineNum === targetLine) {
        return { exactMatch: true, candidate: current };
      }
      else if (current.lineNum > targetLine) {
        return { exactMatch: false, candidate, nextCandidate: current };
      }
    }
    candidate = current;
  }

  return { exactMatch: false, candidate };
};

export { SOURCE_LINE_CLASSNAME, SOURCE_LINE_ATTRIBUTE }