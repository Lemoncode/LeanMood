import {studentActionEnums} from '../../../common/actionEnums/student';
import {studentTrainingReducer, StudentTrainingState} from '../training';

describe('studentTrainingReducer', () => {
  it('is defined', () => {
    // Assert
    expect(studentTrainingReducer).not.to.be.undefined;
  });

  it('should return initial state when passing undefined state', () => {
    // Arrange
    const originalState = undefined;
    const action = {};

    const expectedState = new StudentTrainingState();
    // Act
    const nextState = studentTrainingReducer(originalState, action);

    // Assert
    expect(nextState).not.to.be.undefined;
    expect(nextState.list).to.equal(expectedState.list);
  });

  it('should return original state when passing not expected action type', () => {
    // Arrange
    const originalState = new StudentTrainingState();
    const action = {
      type: 'NOT_EXPECTED_ACTION',
    };

    // Act
    Object.freeze(originalState);
    const nextState = studentTrainingReducer(originalState, action);

    // Assert
    expect(nextState).not.to.be.undefined;
    expect(nextState).to.equal(originalState);
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals GET_SUMMARY_TRAINING_REQUEST_COMPLETED`, () => {
    // Arrange
    const originalState = new StudentTrainingState();
    const action = {
      type: studentActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = studentTrainingReducer(originalState, action);

    // Assert
    expect(nextState.list).to.equal(action.payload);
    expect(originalState).to.be.frozen;
  });

});
