import { expect } from 'chai';
import {} from 'mocha';
import {} from 'core-js';
import {TrainingSummary} from '../trainingSummary';

describe('TrainingSummary', () => {
  let trainingSummary = null;

  beforeEach(() => {
    trainingSummary = new TrainingSummary();
  });

  it('Is instantiated and exists', () => {
    // Assert
    expect(trainingSummary).not.to.be.undefined;
    expect(trainingSummary).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initialized with the expected values on properties', () => {
      expect(trainingSummary.id).to.be.equal(-1);
      expect(trainingSummary.name).to.be.equal('');
      expect(trainingSummary.isActive).to.be.false;
    });
  });

});
