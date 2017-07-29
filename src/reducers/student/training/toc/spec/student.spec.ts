import * as deepFreeze from 'deep-freeze';
import { trainingTOCReducer } from '../trainingTOC';
import { TrainingTOC } from '../../../../../model/student/trainingToc';
import { studentActionEnums } from '../../../../../common/actionEnums/student/';

describe('trainingTOCReducer', () => {
  it('should be a function', () => {
    // Assert
    expect(trainingTOCReducer).to.be.a('function');
  });

  it('should return the initial state when state is undefined', () => {
    // Arrange
    const state = undefined;
    const expectedState = new TrainingTOC();
    const action = {};
    deepFreeze(action);

    // Act
    const newState = trainingTOCReducer(state, action);

    // Assert
    expect(newState).to.be.deep.equals(expectedState);
  });

  it('should return the current state when action type is uknown', () => {
    // Arrange
    const state = undefined;
    const expectedState = new TrainingTOC();
    const action = {
      type: 'UNKNOWN_ACTION',
    };
    deepFreeze(action);

    // Act
    const newState = trainingTOCReducer(state, action);

    // Assert
    expect(newState).to.be.deep.equals(expectedState);
  });

  it('should return the action payload when action is STUDENT_FETCH_TRAINING_TOC', () => {
    // Arrange
    const state = new TrainingTOC();
    const payload: TrainingTOC = {
      id: '123',
      content: 'Training TOC',
      name: 'Training name',
    };
    const action = {
      type: studentActionEnums.FETCH_TRAINING_TOC_COMPLETED,
      payload,
    };
    deepFreeze(action);
    deepFreeze(state);

    // Act
    const newState = trainingTOCReducer(state, action);

    // Assert
    expect(newState).to.be.deep.equals(payload);
  });
});
