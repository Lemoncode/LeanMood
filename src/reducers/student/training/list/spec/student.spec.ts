import * as deepFreeze from 'deep-freeze';
import { studentActionEnums } from '../../../../../common/actionEnums/student';
import { trainingListReducer } from '../trainingList';
import { TrainingSummary } from './../../../../../model/trainingSummary';

describe('trainingListReducer', () => {
  it('should be a function', () => {
    // Assert
    expect(trainingListReducer).to.be.a('function');
  });

  it('should return initial state when passing initial state as undefined', () => {
    // Arrange
    const originalState = undefined;
    const action = {};
    const expectedState: TrainingSummary[] = [];
    deepFreeze(action);

    // Act
    const nextState = trainingListReducer(originalState, action);

    // Assert
    expect(nextState).to.be.deep.equal(expectedState);
  });

  it('should return original state when passing not expected action type', () => {
    // Arrange
    const originalState: TrainingSummary[] = [];
    const action = {
      type: 'NOT_EXPECTED_ACTION',
    };
    deepFreeze(action);
    deepFreeze(originalState);

    // Act
    const nextState = trainingListReducer(originalState, action);

    // Assert
    expect(nextState).to.be.deep.equals(originalState);
  });

  it('should return next state when passing action type equals GET_SUMMARY_TRAINING_REQUEST_COMPLETED', () => {
    // Arrange
    const originalState: TrainingSummary[] = [];
    const trainingSummary: TrainingSummary[] = [
      {
        id: '123',
        end: new Date(),
        isActive: false,
        name: 'Training',
        start: new Date(),
      },
    ];
    const action = {
      type: studentActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
      payload: trainingSummary,
    };
    deepFreeze(action);
    deepFreeze(originalState);

    // Act
    const nextState = trainingListReducer(originalState, action);

    // Assert
    expect(nextState).to.be.deep.equals(action.payload);
  });
});
