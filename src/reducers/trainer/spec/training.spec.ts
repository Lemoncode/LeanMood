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
    and originalState has shouldUpdateEditorCursor equals false`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldUpdateEditorCursor = false;
    const action = {
      type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldUpdateEditorCursor).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals GET_TRAINING_CONTENT_REQUEST_COMPLETED
    and originalState has shouldUpdateEditorCursor equals true`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldUpdateEditorCursor = true;
    const action = {
      type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldUpdateEditorCursor).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals TRAINING_CONTENT_CHANGED
    and originalState has shouldUpdateEditorCursor equals false`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldUpdateEditorCursor = false;
    const action = {
      type: trainerActionEnums.TRAINING_CONTENT_CHANGED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldUpdateEditorCursor).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals TRAINING_CONTENT_CHANGED
    and originalState has shouldUpdateEditorCursor equals true`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.shouldUpdateEditorCursor = true;
    const action = {
      type: trainerActionEnums.TRAINING_CONTENT_CHANGED,
      payload: 'Test content',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.content).to.equal(action.payload);
    expect(nextState.shouldUpdateEditorCursor).to.be.false;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals UPDATE_EDITOR_CURSOR`, () => {
    // Arrange
    const originalState = new TrainingState();
    const action = {
      type: trainerActionEnums.UPDATE_EDITOR_CURSOR,
      payload: 10,
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.cursorStartPosition).to.equal(action.payload);
    expect(nextState.shouldUpdateEditorCursor).to.be.true;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals SET_ACTIVE_PANEL`, () => {
    // Arrange
    const originalState = new TrainingState();
    const action = {
      type: trainerActionEnums.SET_ACTIVE_PANEL,
      payload: 'mypanel',
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.activePanelId).to.equal(action.payload);
    expect(originalState).to.be.frozen;
  });


  it(`should return next state when passing action type equals TOGGLE_EDITOR_PREVIEW
    and newState.showPreview == !prevState.showPreview (false case)`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.showPreview = false;
    const action = {
      type: trainerActionEnums.TOGGLE_EDITOR_PREVIEW,
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.showPreview).to.be.true;
    expect(originalState).to.be.frozen;
  });

  it(`should return next state when passing action type equals TOGGLE_EDITOR_PREVIEW
    and newState.showPreview == !prevState.showPreview (true case)`, () => {
    // Arrange
    const originalState = new TrainingState();
    originalState.showPreview = true;
    const action = {
      type: trainerActionEnums.TOGGLE_EDITOR_PREVIEW,
    };

    // Act
    Object.freeze(originalState);
    const nextState = trainingReducer(originalState, action);

    // Assert
    expect(nextState.showPreview).to.be.false;
    expect(originalState).to.be.frozen;
  });
});
