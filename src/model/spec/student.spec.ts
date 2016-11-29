import { expect } from 'chai';
import {} from 'mocha'
import {} from 'core-js'
import {Student} from '../student';

describe('Student', () => {
  let student : Student = null;

  beforeEach(() => {
    student = new Student();
  });

  it('Is instantiated and exists', () => {
    // Assert
    expect(student).not.to.be.undefined;
    expect(student).not.to.be.null;
  });

  describe('#constructor', () => {
    it('Is initialized with the expected values on properties', () => {
      expect(student.id).to.be.equal(-1);
      expect(student.fullname).to.be.equal('');
      expect(student.email).to.be.equal('');
      expect(student.phoneNumber).to.be.equal('');      
      expect(student.isActive).to.be.true;
    });
  });

});
