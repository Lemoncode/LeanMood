import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import {} from 'mocha'
import {} from 'core-js'
import { adminStudentReducer } from '../adminStudent';

describe('adminStudentReducer', () => {
  it("is defined", () => {
    // Arrange
    // Act
    // Assert
    expect(adminStudentReducer).not.be.undefined;
  });

  it("should return same state when passing null action", () => {
    // Arrange
    const originalState = {mycustomlabel: 'test'};
    // Act
    const newState = adminStudentReducer(originalState, null);

    // Assert
    expect(newState).to.be.equal(originalState);

  });


});
