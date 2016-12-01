import { expect } from 'chai';
import {} from 'mocha'
import {} from 'core-js'
import {Training} from '../training';
import {Student} from '../student';
import {Trainer} from '../trainer';

describe('Training', () => {
  let training : Training = null;

  beforeEach(() => {
    training = new Training();
  });

  it('Is instantiated and exists', () => {
    // Assert
    expect(training).not.to.be.undefined;
    expect(training).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initialized with the expected values on properties', () => {
      expect(training.id).to.be.equal(-1);
      expect(training.name).to.be.equal('');
      expect(training.active).to.be.false;
      expect(training.start.toString()).to.be.equal(new Date().toString());
      expect(training.end.toString()).to.be.equal(new Date().toString());
      expect(training.trainers.length).to.be.equal(new Array<Trainer>().length);
      expect(training.students.length).to.be.equal(new Array<Student>().length);
  });
});

});
