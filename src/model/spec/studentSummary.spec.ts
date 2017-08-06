import { expect } from 'chai';
import {} from 'mocha';
import {} from 'core-js';
import {StudentSummary} from '../studentSummary';

describe('StudentSummary', () => {
  let student = null;

  beforeEach(() => {
    student = new StudentSummary();
  });

  it('Is instantiated and exists', () => {
    // Assert
    expect(student).not.to.be.undefined;
    expect(student).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initialized with the expected values on properties', () => {
      expect(student.id).to.be.equal('');
      expect(student.fullname).to.be.equal('');
      expect(student.email).to.be.equal('');
    });
  });

});
