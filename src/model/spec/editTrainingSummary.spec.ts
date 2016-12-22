import { expect } from 'chai';
import {EditTrainingSummary} from '../editTrainingSummary'

describe('EditTrainingSummary', () => {
  let editTrainingSummary = null;

  beforeEach(() => {
    editTrainingSummary = new EditTrainingSummary();
  });

  it('Is instantiated and exists', () => {
    // Assert
    expect(editTrainingSummary).not.to.be.undefined;
    expect(editTrainingSummary).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initialized with the expected values on properties', () => {
      expect(editTrainingSummary.id).to.be.equal(-1);
      expect(editTrainingSummary.content).to.be.equal('');
    });
  });

});
