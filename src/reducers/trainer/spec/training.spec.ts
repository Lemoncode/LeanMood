import {trainerActionEnums} from '../../../common/actionEnums/trainer';
import {trainingReducer, TrainingState} from '../training';

describe('trainingReducer', () => {
  it('is defined', () => {
    // Assert
    expect(trainingReducer).not.to.be.undefined;
  });

  it('should return initial state when passing undefined state', () => {
    // Arrange
    const originalState = undefined;
    const action = {};

    const expectedState = new TrainingState();
    // Act
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState).not.to.be.undefined;
    expect(nextState.content).to.equal(expectedState.content);
  });

  it('should return original state when passing not expected action type', () => {
    // Arrange
    const originalState = new TrainingState();
    const action = {
      type: 'NOT_EXPECTED_ACTION',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState).not.to.be.undefined;
    expect(nextState).to.equal(originalState);
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals GET_TRAINING_CONTENT_REQUEST_COMPLETED
     and originalState has shouldSetEditorFocus equals false`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldSetEditorFocus = false;
    const action = {
      type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldSetEditorFocus).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals GET_TRAINING_CONTENT_REQUEST_COMPLETED
     and originalState has shouldSetEditorFocus equals true`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldSetEditorFocus = true;
    const action = {
      type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldSetEditorFocus).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals TRAINING_CONTENT_CHANGED
      and originalState has shouldSetEditorFocus equals false`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldSetEditorFocus = false;
    const action = {
      type: trainerActionEnums.TRAINING_CONTENT_CHANGED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldSetEditorFocus).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals TRAINING_CONTENT_CHANGED
      and originalState has shouldSetEditorFocus equals true`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldSetEditorFocus = true;
    const action = {
      type: trainerActionEnums.TRAINING_CONTENT_CHANGED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldSetEditorFocus).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals SELECT_TOOLBAR_COMMAND
      and originalState has shouldSetEditorFocus equals false`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldSetEditorFocus = false;
    const action = {
      type: trainerActionEnums.SELECT_TOOLBAR_COMMAND,
      payload: {
        toolbarCommand: {
          caret: 'Test caret',
          offset: 5,
        },
      },
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.toolbarCommand.caret).to.equal(action.payload.toolbarCommand.caret);
    expect(nextState.toolbarCommand.offset).to.equal(action.payload.toolbarCommand.offset);
    expect(nextState.shouldSetEditorFocus).to.be.true;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals SELECT_TOOLBAR_COMMAND
      and originalState has shouldSetEditorFocus equals true`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldSetEditorFocus = true;
    const action = {
      type: trainerActionEnums.SELECT_TOOLBAR_COMMAND,
      payload: {
        toolbarCommand: {
          caret: 'Test caret',
          offset: 5,
        },
      },
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.toolbarCommand.caret).to.equal(action.payload.toolbarCommand.caret);
    expect(nextState.toolbarCommand.offset).to.equal(action.payload.toolbarCommand.offset);
    expect(nextState.shouldSetEditorFocus).to.be.true;
    expect(originalState).to.be.frozen;
  });
});
