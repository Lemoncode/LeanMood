import * as deepFreeze from 'deep-freeze';
import { studentReducer, StudentState } from '../student';
import { studentActionEnums } from '../../../common/actionEnums/student/';

describe('studentReducer', () => {
  it('should be a function', () => {
    // Assert
    expect(studentReducer).to.be.a('function');
  });

  it('should return the initial state when state is undefined', () => {
    // Arrange
    const state = undefined;
    const expectedState = new StudentState();
    const action = {};
    deepFreeze(action);

    // Act
    const newState = studentReducer(state, action);

    // Assert
    expect(newState).to.be.deep.equals(expectedState);
  });

  it('should return the current state when action type is uknown', () => {
    // Arrange
    const state = undefined;
    const expectedState = new StudentState();
    const action = {
      type: 'UNKNOWN_ACTION',
    };
    deepFreeze(action);

    // Act
    const newState = studentReducer(state, action);

    // Assert
    expect(newState).to.be.deep.equals(expectedState);
  });

  it('should return the action payload when action is STUDENT_FETCH_TRAINING_TOC', () => {
    // Arrange
    const state = new StudentState();
    const payload = 'Markdown text';
    const expectedState: StudentState = {
      trainingTOC: payload,
    };
    const action = {
      type: studentActionEnums.FETCH_TRAINING_TOC_COMPLETED,
      payload,
    };
    deepFreeze(action);
    deepFreeze(state);

    // Act
    const newState = studentReducer(state, action);

    // Assert
    expect(newState).to.be.deep.equals(expectedState);
  });
});
